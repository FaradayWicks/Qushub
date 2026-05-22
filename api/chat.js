import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("--- DEBUG START ---");
    console.log("Step 1: API Key Check ->", process.env.GEMINI_API_KEY ? "Key Majood Hai" : "KEY MISSING!");

    const { messages } = req.body;
    console.log("Step 2: Messages Received ->", messages ? messages.length : "0");

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Yahan humne model ka naam thora change kiya hai (latest add kiya hai)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    // History aur System prompt nikal kar sirf basic test kar rahe hain
    const userMessage = messages[messages.length - 1].content;
    console.log("Step 3: Sending Message to Gemini ->", userMessage);

    const result = await model.generateContent(userMessage);
    const text = result.response.text();

    console.log("Step 4: SUCCESS! Reply Aa Gaya.");
    console.log("--- DEBUG END ---");

    res.status(200).json({ reply: text });

  } catch (error) {
    console.error("🔥 Step Failed! EXACT ERROR:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}