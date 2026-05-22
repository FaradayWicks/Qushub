import { NextRequest, NextResponse } from 'next/server';
import { VertexAI } from '@google-cloud/vertexai';
import nodemailer from 'nodemailer';

const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export async function POST(req: NextRequest) {
  let lastUserMessage = "";

  try {
    const { messages, supportRequest } = await req.json();
    lastUserMessage = messages[messages.length - 1]?.content || "";

    // Email parsing regex rules for automated triggers
    const hasEmail = emailRegex.test(lastUserMessage);
    const supportEmail = lastUserMessage.match(emailRegex)?.[0] || "";
    const wantsSupport = lastUserMessage.toLowerCase().includes("support") || 
                         lastUserMessage.toLowerCase().includes("contact") || 
                         lastUserMessage.toLowerCase().includes("mail");

    if (supportRequest && supportEmail) {
      const webhookUrl = process.env.MATTERMOST_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `### 💬 New Chatbot Support Request\n| Field | Details |\n|---|---|\n| **Email** | ${supportEmail} |\n| **Message** | Contact Support requested via website chatbot |\n\n_Please follow up with this visitor._`,
          }),
        }).catch(() => {});
      }

      return NextResponse.json({
        text: "Thanks! I've sent your email directly to our support team. Someone from Quishub will reach out shortly.",
      });
    }

    // ==========================================
    // 1. LIVE NODEMAILER SMTP ALERT LAYER (ZOHO)
    // ==========================================
    if (hasEmail || wantsSupport) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: 'quishub@gmail.com',
            pass: 'fsaf tomb sxyx sqam',
          },
        });

        const mailOptions = {
          from: '"Quishub Chatbot" <quishub@gmail.com>',
          to: 'quishub@gmail.com',
          subject: '🚀 New Lead / Support Request from Quishub Chatbot',
          text: `Hello Team,\n\nYou have received a new lead notification from the chatbot workspace.\n\nUser Message: "${lastUserMessage}"\n\nPlease check your systems to assist the user.\n\nBest Regards,\nQuishub Automation Engine`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #1e293b; border-radius: 8px; max-width: 600px;">
              <h2 style="color: #2152c4; margin-top: 0;">🚀 New Lead / Support Request</h2>
              <p>Hello Team,</p>
              <p>You have received a new automated notification from the live chatbot workspace:</p>
              <blockquote style="background: #f1f5f9; padding: 15px; border-left: 4px solid #38bdf8; margin: 10px 0; font-style: italic;">
                <strong>User Message:</strong> "${lastUserMessage}"
              </blockquote>
              <p style="color: #64748b; font-size: 12px; margin-top: 20px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
                Automated notification powered by Quishub SMTP Link.
              </p>
            </div>
          `,
        };

        // Fire the email alert asynchronously
        await transporter.sendMail(mailOptions);
        console.log("Zoho SMTP lead email sent successfully.");
      } catch (emailError) {
        console.error("Nodemailer SMTP Execution Error:", emailError);
      }
    }

    // Senior's Service Account Credentials (Windsurf Core - UNTOUCHED)
    const clientEmail = "pak-law-assist-service-account@paklawassistapp.iam.gserviceaccount.com";
    const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCB+0wGp6tKh/Ae\nEtEc30RsydWH9DYCmzXzIzV+e8QuilNq0fW68h1aXKqa4G5FZTEMJ9yEYWorM8lV\nFw786V0jqMWdO45J1fFb/h5cX3S8Xfjp87vB6JKLElZQRCwwiz6yW8FpHPmpfuCC\nEIPDi2W5Ik6Xy9KgY8mUbDyf3T7TljfN/62nz/csw4eyyNfzGg4pJEzlD7lN2aNf\ni2UjR7DcB7iiEXYzPVd2k1VAdZaprZKNL9087alvX/EHwea87gR7Natl6E/OzSMI\nU/EpthEXCWFpnokyVNoZ03rRfCGdQd1gp3RjA/J+TXENZu7HQCdJMw/dA7pCa8+3\n9c9/lruVAgMBAAECggEAMg7tQxzcr4n11CcsCKIFsJ30kfTfvhY3a0lyhyE0NzZH\nlPqCV/p5inzoqVfor+oePw+08fiwUi4SCiaku4tGNv7/CCRREqeF2gdeevW6N/c6\n7yLSewXONigcPLJckF94CGmk7Y3eqsO1w/GHRU5QoUGQog45slJr5jDfEjQ7R3Hk\nz3gKpaEr/6qrjJ5iBAYc0jhQh2ZPyzELhhFWoNoLC+TFHxkihEBgRj2NR3yVkQ3n\nAAkE9XA4shq+8eTNSNOsP1HFIjeHojCI8Aj5SaUoUtmOH2mPnG8bszgt5VWqaUdf\n8OoDU2LjxdhBcZObbmtupLR7jXzYlwsz9Kp6/biH6wKBgQC3FYlDWaJRKdvuPucr\MMtUoRBa51/cPqWMjmgTrqpHtggJCLRD8CNi9MWOIsZDrHqYNk9tm+ns+Zn4eduA\niA0YFCNJ2UMKnQe6whtWyWATCsVaynnRshvmYxk4QduxpZYejsgJiGhrTf+u4XRR\nJ36kS8lhh4kKgILlarOBaAvRWwKBgQC1v6kP84ieRNi6U+WVYsQMZnKujyrO0Z4q\nbpoMVdRkF8Z67wsDTAC4L7rTYiFMc1pxbpsMi0ggv8LD6V2UrgE2X9b8L+hz7iwp\nvjd+g0Nn7H1NfrmeT6qgXecn9M0DO1dIpyQ1bsL+AnPpszJg6KYUapqsXx78AyvA\nXhoRHHjJzwKBgQCjDGXy+heJSssX0SNUnp7mXo5PNrFzVsNeetCLfskdFirvyLWp\nr2oETdLGc4e4axm/BtcT2X+p0NxjojpurDtlD0IiGYAQKqrgks+AKdULAFOkOJ/m\ntUUNl4G1TUmXWs1np2bUvounzI4BM73ALHknXmsZFXhhRvPL1ovIml2z8wKBgQCQ\nRAt5mvEl2DZEaNYDJzvBMAz2HLR5KJCo09Q52GNX9DtbV6XhPxIPIevlYK5X1fTD\nt20hnulo/W4nPnVG0Hwr4hVvZsPYSgUKOXApXx5BPsoTmnTSgiBJXWBgKgQV/aOC\nCxJFy57CK8ZAijqCDAnQiPIvwu2AUzAGaWu9i2EhpwKBgGAzZk8iXh4JeMtzE6Jl\n2t0hkiZgCWp28+xQ9xOEKjj8NrTQOI7TX9MnBpnLoecwobM9mwiv+bHq8LFUZn1e\n778iuv2nNNtqDHIcAv/aDSg1oCVlBpiCAekkydJL2c4zenP17y3J10Y8OEPJ9Hkz\nFSTcNdgD6RiCglcn74h6oe4c\n-----END PRIVATE KEY-----\n";

    // 1. Initialize Vertex AI (Windsurf Core - UNTOUCHED)
    const vertexAI = new VertexAI({
      project: 'paklawassistapp',
      location: 'us-central1',
      googleAuthOptions: {
        credentials: {
          client_email: clientEmail,
          private_key: privateKey,
        }
      }
    });

    // 2. Model call with Vertex AI naming conventions & UPDATED FRIENDLY PERSONA
    const generativeModel = vertexAI.getGenerativeModel({
      model: 'projects/paklawassistapp/locations/us-central1/publishers/google/models/gemini-2.5-flash',
      generationConfig: { 
        temperature: 0.7, // Keeps it conversational and creative
        maxOutputTokens: 512,
      },
      systemInstruction: {
        role: "system",
        parts: [{ 
          text: `You are Quishub AI, the super friendly, enthusiastic, and welcoming digital assistant for Quishub AI Product Studio! Your name is spelled Q-u-i-s-h-u-b.
          
          KNOWLEDGE BASE ABOUT QUISHUB:
          - What is Quishub?: Quishub is an elite AI Product Studio that designs and builds cutting-edge AI products, premium website redesigns, beautiful user interfaces, and custom automated workflow pipelines.
          - Core Services: Premium UI/UX Web Redesign, Custom AI Agents, Enterprise Chatbot Architecture, Custom LLM Gateway Integrations, and robust QA Automation testing.
          
          TONE & STYLE:
          - Be incredibly warm, conversational, encouraging, and clear. Feel free to use cheerful tech-studio greetings!
          - Keep your answers beautifully structured but concise.
          - If a user mistakes Quishub for a quiz or assessment application, gently correct them with a warm smile: "Oh, we get that all the time because of our catchy name! But Quishub is actually a premium AI Product Studio where we build amazing web platforms and automated tools!"
          
          WHEN A USER SHARES AN EMAIL OR ASKS FOR LIVE SUPPORT:
          - Acknowledge it with genuine excitement and reassure them that their lead is tracked: "Awesome! Thank you so much for sharing your details. I've successfully routed your request directly to our engineering desk via our live communication gateway. A product specialist from the Quishub team will reach out to you shortly to chat about your project!"`
        }]
      }
    });

    // 3. Include recent conversation context so the assistant can remember prior user details
    const contents = messages
      .filter((message: { role?: string; content?: string }) => message.content?.trim())
      .slice(-12)
      .map((message: { role?: string; content?: string }) => ({
        role: message.role === "model" ? "model" : "user",
        parts: [{ text: message.content || "" }]
      }));

    // 4. Hit Endpoint (Windsurf Core - UNTOUCHED)
    const responseResult = await generativeModel.generateContent({ contents });
    const replyText = responseResult.response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (replyText) {
      return NextResponse.json({ text: replyText }, { status: 200 });
    } else {
      throw new Error("No text returned");
    }

  } catch (error: any) {
    console.error('--- INTERNAL GATEWAY CAPTURED LOG ---');
    console.error(error.message || error);
    console.error('--------------------------------------');

    // 💡 LIVE FALLBACK BLOCK: Fixed spelling to Quishub and shifted to match friendly tone
    let fallbackReply = "Hey there! Welcome to Quishub AI Product Studio. How can I help you make your web designs or automation processes awesome today?";
    
    if (emailRegex.test(lastUserMessage)) {
      fallbackReply = "Thank you so much for sharing your email address! I've automatically routed your contact information straight to the Quishub team. An expert will reach out to you shortly!";
    } else if (lastUserMessage.toLowerCase().includes("service") || lastUserMessage.toLowerCase().includes("work")) {
      fallbackReply = "We specialize in premium Web Redesign, Custom AI Agents, and QA Automation workflows. What can we design or build for you today?";
    }

    return NextResponse.json({ text: fallbackReply }, { status: 200 });
  }
}