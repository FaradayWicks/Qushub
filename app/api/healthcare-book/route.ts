import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ------------------------------------------------------------------ */
/*  Static high-availability video room for Healthcare diagnostics    */
/* ------------------------------------------------------------------ */
const HEALTHCARE_MEETING_LINK =
  process.env.HEALTHCARE_MEETING_LINK ||
  "https://meet.google.com/quishub-healthcare-diagnostics";

const ADMIN_INBOX =
  process.env.HEALTHCARE_NOTIFY_EMAIL ||
  process.env.SMTP_USER ||
  "quishub@gmail.com";

/* ------------------------------------------------------------------ */
/*  Gmail SMTP transporter — reuses the same env vars as /api/booking */
/* ------------------------------------------------------------------ */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 20000,
});

/* ------------------------------------------------------------------ */
/*  HTML escape helper to keep email payloads safe                    */
/* ------------------------------------------------------------------ */
function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ------------------------------------------------------------------ */
/*  Email templates — light medical paradigm                          */
/* ------------------------------------------------------------------ */
function clientEmail(opts: {
  name: string;
  practice: string;
  schedule: string;
  bottleneck: string;
  meetingLink: string;
}) {
  const { name, practice, schedule, bottleneck, meetingLink } = opts;
  return `
  <div style="font-family: -apple-system, Segoe UI, Inter, sans-serif; padding: 32px; background: #f5f5f4; color: #0f172a;">
    <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border: 1px solid rgba(15,23,42,0.08); border-radius: 16px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 28px 32px;">
        <div style="font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.85); font-weight: 700;">Quishub Healthcare</div>
        <div style="font-size: 22px; color: #ffffff; font-weight: 600; margin-top: 6px;">Your diagnostic call is confirmed</div>
      </div>
      <div style="padding: 28px 32px;">
        <p style="font-size: 16px; line-height: 1.55; margin: 0 0 14px 0;">Hi ${escapeHtml(name)},</p>
        <p style="font-size: 15px; line-height: 1.6; color: #334155; margin: 0 0 18px 0;">
          Thank you for requesting a clinical workflow diagnostic call with Quishub. We&rsquo;ve reserved your slot. No pitch, no charge &mdash; 15 focused minutes on where ${escapeHtml(practice)} is losing hours.
        </p>

        <div style="background: #f8fafc; border: 1px solid rgba(15,23,42,0.08); border-radius: 12px; padding: 18px 20px; margin: 18px 0;">
          <div style="font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #64748b; font-weight: 700; margin-bottom: 6px;">Scheduled time</div>
          <div style="font-size: 17px; font-weight: 600; color: #0f172a;">${escapeHtml(schedule)}</div>
        </div>

        <div style="background: #f8fafc; border: 1px solid rgba(15,23,42,0.08); border-radius: 12px; padding: 18px 20px; margin: 0 0 22px 0;">
          <div style="font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #64748b; font-weight: 700; margin-bottom: 8px;">Video meeting</div>
          <a href="${meetingLink}" style="font-size: 15px; font-weight: 600; color: #2563eb; text-decoration: none; word-break: break-all;">${meetingLink}</a>
        </div>

        <a href="${meetingLink}" style="display: inline-block; background: #0f172a; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 22px; border-radius: 999px;">Join the call</a>

        <div style="margin-top: 26px; padding-top: 18px; border-top: 1px solid rgba(15,23,42,0.08);">
          <div style="font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #64748b; font-weight: 700; margin-bottom: 6px;">What you shared</div>
          <div style="font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(bottleneck)}</div>
        </div>
      </div>
      <div style="padding: 16px 32px; background: #f8fafc; font-size: 12px; color: #64748b;">
        Quishub &middot; Healthcare Workflow Software &middot; Reply to this email for any changes.
      </div>
    </div>
  </div>`;
}

function adminEmail(opts: {
  name: string;
  practice: string;
  email: string;
  schedule: string;
  bottleneck: string;
  meetingLink: string;
}) {
  const { name, practice, email, schedule, bottleneck, meetingLink } = opts;
  return `
  <div style="font-family: -apple-system, Segoe UI, Inter, sans-serif; padding: 24px; background: #ffffff; color: #0f172a;">
    <div style="max-width: 600px; margin: 0 auto; border: 1px solid rgba(15,23,42,0.08); border-radius: 14px; overflow: hidden;">
      <div style="background: #0f172a; padding: 18px 22px;">
        <div style="font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #a78bfa; font-weight: 700;">New Healthcare Lead</div>
        <div style="font-size: 18px; color: #ffffff; font-weight: 600; margin-top: 4px;">${escapeHtml(name)} &mdash; ${escapeHtml(practice)}</div>
      </div>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 12px 22px; color: #64748b; width: 160px; border-bottom: 1px solid rgba(15,23,42,0.06);">Doctor</td><td style="padding: 12px 22px; color: #0f172a; font-weight: 600; border-bottom: 1px solid rgba(15,23,42,0.06);">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 12px 22px; color: #64748b; border-bottom: 1px solid rgba(15,23,42,0.06);">Practice</td><td style="padding: 12px 22px; color: #0f172a; font-weight: 600; border-bottom: 1px solid rgba(15,23,42,0.06);">${escapeHtml(practice)}</td></tr>
        <tr><td style="padding: 12px 22px; color: #64748b; border-bottom: 1px solid rgba(15,23,42,0.06);">Email</td><td style="padding: 12px 22px; color: #0f172a; font-weight: 600; border-bottom: 1px solid rgba(15,23,42,0.06);"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 12px 22px; color: #64748b; border-bottom: 1px solid rgba(15,23,42,0.06);">Scheduled</td><td style="padding: 12px 22px; color: #0f172a; font-weight: 600; border-bottom: 1px solid rgba(15,23,42,0.06);">${escapeHtml(schedule)}</td></tr>
        <tr><td style="padding: 12px 22px; color: #64748b; border-bottom: 1px solid rgba(15,23,42,0.06);">Meeting</td><td style="padding: 12px 22px; border-bottom: 1px solid rgba(15,23,42,0.06);"><a href="${meetingLink}" style="color: #2563eb; font-weight: 600; text-decoration: none; word-break: break-all;">${meetingLink}</a></td></tr>
        <tr><td style="padding: 12px 22px; color: #64748b; vertical-align: top;">Bottleneck</td><td style="padding: 12px 22px; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(bottleneck)}</td></tr>
      </table>
    </div>
  </div>`;
}

/* ------------------------------------------------------------------ */
/*  POST handler                                                      */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body?.name || "").trim();
    const practice = String(body?.practice || "").trim();
    const email = String(body?.email || "").trim();
    const schedule = String(body?.schedule || "").trim();
    const bottleneck = String(body?.bottleneck || "").trim();

    if (!name || !practice || !email || !schedule || !bottleneck) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const meetingLink = HEALTHCARE_MEETING_LINK;

    /* -------------------------------------------------------------- */
    /*  Run all three side-effects concurrently                       */
    /* -------------------------------------------------------------- */
    const fromAddress = `"Quishub Healthcare" <${process.env.SMTP_USER}>`;

    const clientMail = transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: `Your clinical workflow diagnostic call is confirmed`,
      html: clientEmail({ name, practice, schedule, bottleneck, meetingLink }),
    });

    const adminMail = transporter.sendMail({
      from: fromAddress,
      to: ADMIN_INBOX,
      replyTo: email,
      subject: `🩺 New healthcare lead — ${name} (${practice})`,
      html: adminEmail({ name, practice, email, schedule, bottleneck, meetingLink }),
    });

    const mattermostText =
      `### 🚀 **New High-Value Healthcare Lead Dispatched!**\n` +
      `- **Name:** ${name}\n` +
      `- **Practice:** ${practice}\n` +
      `- **Email:** ${email}\n` +
      `- **Scheduled Time:** ${schedule}\n` +
      `- **Clinical Pain Point:** ${bottleneck}\n` +
      `- **Live Video Meeting Space:** ${meetingLink}`;

    const webhookUrl = process.env.MATTERMOST_WEBHOOK_URL;
    const mattermostPing = webhookUrl
      ? fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: mattermostText }),
        }).catch((err) => {
          console.error("Mattermost notify failed:", err);
        })
      : Promise.resolve();

    const [clientResult, adminResult] = await Promise.allSettled([
      clientMail,
      adminMail,
      mattermostPing,
    ]);

    if (clientResult.status === "rejected" || adminResult.status === "rejected") {
      const clientErr =
        clientResult.status === "rejected"
          ? (clientResult.reason as Error)
          : null;
      const adminErr =
        adminResult.status === "rejected"
          ? (adminResult.reason as Error)
          : null;
      console.error("Healthcare booking email failed:", {
        client: clientErr ? `${clientErr.name}: ${clientErr.message}` : "ok",
        admin: adminErr ? `${adminErr.name}: ${adminErr.message}` : "ok",
        clientStack: clientErr?.stack,
        adminStack: adminErr?.stack,
      });
      const detail = clientErr?.message || adminErr?.message || "unknown";
      return NextResponse.json(
        { error: `Email delivery failed: ${detail}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, meetingLink });
  } catch (error: unknown) {
    console.error("Healthcare booking API error:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Failed to process booking. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
