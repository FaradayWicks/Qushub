const QUISHUB_SYSTEM_PROMPT = `[SYSTEM INSTRUCTIONS]: 
You are the official AI Sales Assistant for Quishub, an elite AI Product Studio. 
Core Services: LLM Integration, SaaS MVP Development, Scalable Backends, AI Automation.
Tone: Professional, premium, confident.

STRICT RULES:
1. Respond in PLAIN TEXT only. No bold (**), no bullets.
2. Keep answers concise (2-3 sentences max).
3. If asked about pricing/timeline, refer to booking a call: /contact
4. If the user wants to connect instantly or talk to a human, share this WhatsApp link: https://wa.me/14029010550?text=Hi%20Quishub,%20I%20want%20to%20discuss%20a%20project.
5. If the user provides an email or phone, acknowledge it professionally.
6. IMPORTANT: Output final answer ONLY. Do not include your internal thoughts or [SILENT THOUGHT] tags.`;

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;
    const MATTERMOST_URL = process.env.MATTERMOST_WEBHOOK_URL;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key Missing" }), { status: 500 });
    }

    const MODEL_NAME = "gemini-2.5-flash";

    // --- LEAD CAPTURE & MATTERMOST LOGIC ---
    const lastMessage = messages[messages.length - 1].content;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const phoneRegex = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

    const detectedEmail = lastMessage.match(emailRegex);
    const detectedPhone = lastMessage.match(phoneRegex);

    if ((detectedEmail || detectedPhone) && MATTERMOST_URL) {
      const email = detectedEmail ? detectedEmail[0] : "Not provided";
      const phone = detectedPhone ? detectedPhone[0] : "Not provided";

      fetch(MATTERMOST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "Quishub Sales Scout",
          text: `### 🔥 New Lead Captured!\n**Email:** ${email}\n**Phone:** ${phone}\n**Message:** "${lastMessage}"`,
        }),
      }).catch(err => console.error("❌ Mattermost Error:", err));
    }

    // --- GEMINI API CALL ---
    const contents = messages.map(m => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content || "" }]
    }));

    if (contents.length > 0 && contents[0].role === "user") {
      contents[0].parts[0].text = `SYSTEM: ${QUISHUB_SYSTEM_PROMPT}\n\nUSER: ${contents[0].parts[0].text}`;
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:streamGenerateContent?alt=sse&key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents })
    });

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    
    const transformStream = new TransformStream({
      transform(chunk, controller) {
        const text = decoder.decode(chunk);
        const lines = text.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const dataStr = line.replace("data: ", "").trim();
            if (dataStr === "[DONE]") continue;
            try {
              const data = JSON.parse(dataStr);
              let textChunk = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

              // 1. Clean out thoughts
              textChunk = textChunk
                .replace(/\[SILENT THOUGHT\][\s\S]*?(\]|\n\n|$)/gi, "")
                .replace(/\[THOUGHT\][\s\S]*?(\]|\n\n|$)/gi, "")
                .replace(/Thought:[\s\S]*?(\n\n|$)/gi, "")
                .trim();

              // 2. Filter empty chunks to fix frontend bubble
              if (!textChunk || textChunk === "") {
                continue; 
              }

              data.candidates[0].content.parts[0].text = textChunk;
              controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
            } catch (e) { }
          }
        }
      }
    });

    return new Response(response.body.pipeThrough(transformStream), {
      headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", "Connection": "keep-alive" },
    });

  } catch (error) {
    console.error("🔥 CRITICAL SERVER ERROR:", error);
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
}