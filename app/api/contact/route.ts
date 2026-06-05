import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const notifyEmail = process.env.BOOKING_NOTIFY_EMAIL || process.env.SMTP_USER;

    // ── 1. Send notification email to team ──────────────────────────────────
    await transporter.sendMail({
      from: `"Quishub Contact" <${process.env.SMTP_USER}>`,
      to: notifyEmail,
      subject: `📩 New Contact Form Message — ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #0f172a; color: #e2e8f0; border-radius: 12px;">
          <h2 style="color: #7c3aed; margin-bottom: 16px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #94a3b8;">Name</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Email</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${email}</td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #94a3b8;">Company</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${company}</td></tr>` : ""}
            ${projectType ? `<tr><td style="padding: 8px 0; color: #94a3b8;">Project Type</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${projectType}</td></tr>` : ""}
            ${budget ? `<tr><td style="padding: 8px 0; color: #94a3b8;">Budget</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${budget}</td></tr>` : ""}
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #1e293b; border-radius: 8px;">
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <p style="color: #f1f5f9; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; color: #94a3b8; font-size: 12px;">Submitted via Quishub contact form.</p>
        </div>
      `,
    });

    // ── 2. Send confirmation email to client ────────────────────────────────
    await transporter.sendMail({
      from: `"Quishub" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your message — Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #0f172a; color: #e2e8f0; border-radius: 12px;">
          <h2 style="color: #7c3aed; margin-bottom: 16px;">Thanks for reaching out, ${name}! 🎉</h2>
          <p style="color: #e2e8f0; line-height: 1.6;">
            We've received your message and will get back to you within 24 hours with an honest assessment of your project.
          </p>
          <div style="margin: 16px 0; padding: 16px; background: #1e293b; border-radius: 8px;">
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Your Message</p>
            <p style="color: #f1f5f9; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #94a3b8; line-height: 1.6;">
            In the meantime, feel free to book a discovery call directly if you'd prefer to speak sooner:
          </p>
          <div style="margin: 16px 0; text-align: center;">
            <a href="https://quishub.com/contact" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #7c3aed, #2563eb); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">Book a Discovery Call</a>
          </div>
          <p style="margin-top: 20px; color: #94a3b8; font-size: 12px;">— The Quishub Team</p>
        </div>
      `,
    });

    // ── 3. Send Mattermost notification ─────────────────────────────────────
    const webhookUrl = process.env.MATTERMOST_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `### 📩 New Contact Form Message
| Field | Details |
|---|---|
| **Name** | ${name} |
| **Email** | ${email} |
| **Company** | ${company || "—"} |
| **Project Type** | ${projectType || "—"} |
| **Budget** | ${budget || "—"} |

**Message:**
${message.substring(0, 500)}${message.length > 500 ? "..." : ""}`,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    const message = error instanceof Error ? error.message : "Failed to send message. Please try again.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
