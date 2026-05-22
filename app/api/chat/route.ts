import { NextRequest, NextResponse } from 'next/server';

const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const phoneRegex = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const QUISHUB_SYSTEM_PROMPT = `You are Quishub AI, the official AI Sales Assistant for Quishub, an elite AI Product Studio.
Core services include AI and LLM integration, SaaS MVP development, scalable backend systems, AI automation platforms, data-driven systems, and architecture consulting.
Tone: professional, premium, warm, concise, and confident.
Respond in plain text only. Keep answers short and helpful.
If asked about pricing or timelines, recommend booking a discovery call at /contact.
If the user wants to connect with a human, ask for their email or suggest booking a call.`;

type ChatMessage = {
  role?: string;
  content?: string;
};

async function notifyMattermost(text: string) {
  const webhookUrl = process.env.MATTERMOST_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  }).catch(() => {});
}

async function generateGeminiReply(messages: ChatMessage[]) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const recentMessages = messages
    .filter((message) => message.content?.trim())
    .slice(-12);

  const contents = recentMessages.map((message, index) => ({
    role: message.role === "model" || message.role === "assistant" ? "model" : "user",
    parts: [{
      text: index === 0
        ? `${QUISHUB_SYSTEM_PROMPT}\n\nUser: ${message.content || ""}`
        : message.content || "",
    }],
  }));

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 512,
        },
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Failed to generate chatbot response");
  }

  return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

export async function POST(req: NextRequest) {
  let lastUserMessage = "";

  try {
    const { messages = [], supportRequest } = await req.json();
    lastUserMessage = messages[messages.length - 1]?.content || "";

    const supportEmail = lastUserMessage.match(emailRegex)?.[0] || "";
    const detectedEmail = lastUserMessage.match(emailRegex)?.[0] || "";
    const detectedPhone = lastUserMessage.match(phoneRegex)?.[0] || "";

    if (supportRequest && supportEmail) {
      await notifyMattermost(
        `### ?? New Chatbot Support Request\n| Field | Details |\n|---|---|\n| **Email** | ${supportEmail} |\n| **Message** | Contact Support requested via website chatbot |\n\n_Please follow up with this visitor._`
      );

      return NextResponse.json({
        text: "Thanks! I've sent your email directly to our support team. Someone from Quishub will reach out shortly.",
      });
    }

    if (detectedEmail || detectedPhone) {
      await notifyMattermost(
        `### ?? New Chatbot Lead Captured\n| Field | Details |\n|---|---|\n| **Email** | ${detectedEmail || "Not provided"} |\n| **Phone** | ${detectedPhone || "Not provided"} |\n| **Message** | ${lastUserMessage} |`
      );
    }

    const replyText = await generateGeminiReply(messages);

    return NextResponse.json({
      text: replyText || "Thanks for reaching out! Tell me a bit about what you're building, or book a discovery call on our contact page.",
    });
  } catch (error) {
    console.error("Chat API error:", error);

    let fallbackReply = "Hey there! Welcome to Quishub AI Product Studio. How can I help you today?";

    if (emailRegex.test(lastUserMessage)) {
      fallbackReply = "Thank you for sharing your email. I've routed your details to the Quishub team, and someone will reach out shortly.";
    } else if (lastUserMessage.toLowerCase().includes("service") || lastUserMessage.toLowerCase().includes("work")) {
      fallbackReply = "We build AI integrations, SaaS MVPs, automation platforms, and scalable backend systems. What are you planning to build?";
    }

    return NextResponse.json({ text: fallbackReply }, { status: 200 });
  }
}
