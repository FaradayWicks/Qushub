import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const PKT_OFFSET = "+05:00";

/**
 * OAuth Token Refresh - Google Calendar Integration
 * 
 * ENVIRONMENT SETUP REQUIRED:
 * - GOOGLE_CLIENT_ID: From Google Cloud Console > Credentials
 * - GOOGLE_CLIENT_SECRET: From Google Cloud Console > Credentials  
 * - GOOGLE_REFRESH_TOKEN: Generated via OAuth2 flow (see re-auth guide below)
 * - GOOGLE_CALENDAR_ID: Calendar ID to create events in (or "primary")
 * 
 * RE-AUTHENTICATION GUIDE (if token revoked):
 * 1. Visit Google Cloud Console: https://console.cloud.google.com/apis/credentials
 * 2. Ensure OAuth consent screen is configured (External or Internal)
 * 3. Verify Google Calendar API is enabled: APIs & Services > Enabled APIs
 * 4. Check OAuth credentials exist and are not deleted/recreated
 * 5. Generate new refresh token via OAuth2 playground or manual flow
 * 6. Update .env.local with new GOOGLE_REFRESH_TOKEN value
 * 7. Restart Next.js dev server to load new environment variables
 */
async function getGoogleAccessToken() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  // Validate environment variables with specific missing key identification
  const missingVars: string[] = [];
  if (!clientId) missingVars.push("GOOGLE_CLIENT_ID");
  if (!clientSecret) missingVars.push("GOOGLE_CLIENT_SECRET");
  if (!refreshToken) missingVars.push("GOOGLE_REFRESH_TOKEN");

  if (missingVars.length > 0) {
    console.error("[Calendar Auth] Missing environment variables:", missingVars.join(", "));
    throw new Error(`Missing Google OAuth environment variables: ${missingVars.join(", ")}`);
  }

  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId!, // Non-null assertion validated above
        client_secret: clientSecret!, // Non-null assertion validated above
        refresh_token: refreshToken!, // Non-null assertion validated above
        grant_type: "refresh_token",
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.access_token) {
      // Enhanced error logging for OAuth failures
      console.error("[Calendar Auth] OAuth2 Token Refresh Failed", {
        status: response.status,
        error: data.error,
        errorDescription: data.error_description,
        hint: data.error === "invalid_grant" 
          ? "Refresh token revoked or expired. See RE-AUTHENTICATION GUIDE in source."
          : "Check Google Cloud Console credentials and API enablement.",
      });
      
      throw new Error(
        data.error_description || 
        data.error || 
        "Failed to refresh Google access token"
      );
    }

    return data.access_token as string;
  } catch (error) {
    console.error("[Calendar Auth] Token refresh exception:", error);
    throw error;
  }
}

function to24HourTime(time: string) {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) {
    throw new Error("Invalid booking time format");
  }

  let hours = Number(match[1]);
  const minutes = match[2];
  const period = match[3].toUpperCase();

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${minutes}:00`;
}

function createEventTimes(date: string, time: string) {
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error("Invalid booking date format");
  }

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const day = String(parsedDate.getDate()).padStart(2, "0");
  const startDateTime = `${year}-${month}-${day}T${to24HourTime(time)}${PKT_OFFSET}`;
  const endDateTime = new Date(new Date(startDateTime).getTime() + 30 * 60 * 1000).toISOString();

  return {
    start: startDateTime,
    end: endDateTime,
  };
}

async function createGoogleMeetEvent(name: string, email: string, date: string, time: string) {
  const accessToken = await getGoogleAccessToken();
  const calendarId = encodeURIComponent(process.env.GOOGLE_CALENDAR_ID || "primary");
  const eventTimes = createEventTimes(date, time);

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?conferenceDataVersion=1&sendUpdates=all`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary: `Discovery Call — ${name}`,
        description: `Discovery call booking from Quishub website.\n\nName: ${name}\nEmail: ${email}`,
        start: {
          dateTime: eventTimes.start,
          timeZone: "Asia/Karachi",
        },
        end: {
          dateTime: eventTimes.end,
          timeZone: "Asia/Karachi",
        },
        attendees: [{ email }],
        conferenceData: {
          createRequest: {
            requestId: `quishub-${Date.now()}`,
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Failed to create Google Calendar event");
  }

  return data.hangoutLink || data.conferenceData?.entryPoints?.find((entry: { entryPointType: string }) => entry.entryPointType === "video")?.uri || "";
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, date, time } = await req.json();

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const meetLink = await createGoogleMeetEvent(name, email, date, time);
    const notifyEmail = process.env.BOOKING_NOTIFY_EMAIL || process.env.SMTP_USER;

    // ── 1. Send notification email to team ──────────────────────────────────
    await transporter.sendMail({
      from: `"Quishub Booking" <${process.env.SMTP_USER}>`,
      to: notifyEmail,
      subject: `🗓️ New Discovery Call Booking — ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #0f172a; color: #e2e8f0; border-radius: 12px;">
          <h2 style="color: #7c3aed; margin-bottom: 16px;">New Discovery Call Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #94a3b8;">Name</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Email</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Date</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${date}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Time</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${time} (PKT)</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Google Meet</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;"><a href="${meetLink}" style="color: #60a5fa;">${meetLink}</a></td></tr>
          </table>
          <p style="margin-top: 20px; color: #94a3b8; font-size: 12px;">Calendar invite and Google Meet link have been generated automatically.</p>
        </div>
      `,
    });

    // ── 2. Send confirmation email to client ────────────────────────────────
    await transporter.sendMail({
      from: `"Quishub" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Your Discovery Call is Booked — ${date} at ${time}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #0f172a; color: #e2e8f0; border-radius: 12px;">
          <h2 style="color: #7c3aed; margin-bottom: 16px;">You're booked, ${name}! 🎉</h2>
          <p style="color: #e2e8f0; line-height: 1.6;">
            Your 30-minute discovery call has been scheduled for:
          </p>
          <div style="margin: 16px 0; padding: 16px; background: #1e293b; border-radius: 8px; text-align: center;">
            <p style="font-size: 18px; font-weight: 700; color: #f1f5f9; margin: 0;">${date}</p>
            <p style="font-size: 16px; color: #7c3aed; margin: 4px 0 0 0;">${time} (PKT, UTC+5)</p>
          </div>
          <div style="margin: 16px 0; padding: 16px; background: #1e293b; border-radius: 8px;">
            <p style="color: #94a3b8; margin: 0 0 8px 0;">Join the call here:</p>
            <a href="${meetLink}" style="color: #60a5fa; font-weight: 700;">${meetLink}</a>
          </div>
          <p style="color: #94a3b8; line-height: 1.6;">
            A calendar invite has also been sent to your email. If you need to reschedule, reply to this email.
          </p>
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
          text: `### 🗓️ New Discovery Call Booking\n| Field | Details |\n|---|---|\n| **Name** | ${name} |\n| **Email** | ${email} |\n| **Date** | ${date} |\n| **Time** | ${time} (PKT) |\n| **Google Meet** | ${meetLink} |\n\n_Calendar invite and Google Meet link generated automatically._`,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    // Enhanced error logging to capture authentication failures
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const isAuthError = errorMessage.toLowerCase().includes("token") || 
                        errorMessage.toLowerCase().includes("auth") ||
                        errorMessage.toLowerCase().includes("refresh") ||
                        errorMessage.toLowerCase().includes("revoked") ||
                        errorMessage.toLowerCase().includes("invalid_grant");
    
    console.error("[Booking API] Error Details:", {
      timestamp: new Date().toISOString(),
      isAuthenticationError: isAuthError,
      errorMessage: errorMessage,
      environmentCheck: {
        hasClientId: !!process.env.GOOGLE_CLIENT_ID,
        hasClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
        hasRefreshToken: !!process.env.GOOGLE_REFRESH_TOKEN,
        hasCalendarId: !!process.env.GOOGLE_CALENDAR_ID,
      },
      hint: isAuthError 
        ? "Token revoked or expired. Run re-authentication flow to generate new GOOGLE_REFRESH_TOKEN."
        : "Check server logs for full error details.",
    });
    
    console.error("Booking API error:", error);
    
    // Return user-friendly message with specific auth guidance
    let userMessage = errorMessage;
    if (isAuthError) {
      userMessage = "Calendar authentication error. Please contact support or try booking via email at hello@quishub.com";
    }
    
    return NextResponse.json(
      { error: userMessage },
      { status: 500 }
    );
  }
}
