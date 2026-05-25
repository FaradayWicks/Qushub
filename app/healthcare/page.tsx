"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";

/* ------------------------------------------------------------------ */
/*  Type pairing                                                       */
/* ------------------------------------------------------------------ */

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const ttLakes = localFont({
  src: [
    { path: "../../public/fonts/TT-Lakes-Neue-Light.ttf",   weight: "300", style: "normal" },
    { path: "../../public/fonts/TT-Lakes-Neue-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/TT-Lakes-Neue-Medium.ttf",  weight: "500", style: "normal" },
    { path: "../../public/fonts/TT-Lakes-Neue-Bold.ttf",    weight: "700", style: "normal" },
  ],
  variable: "--font-accent",
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  Inline SVGs                                                        */
/* ------------------------------------------------------------------ */

const IconArrow = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const IconDot = () => (
  <svg viewBox="0 0 8 8" className="h-1.5 w-1.5">
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

const IconBottleneck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
    <path d="M5 3h14M7 3v4l-2 6a4 4 0 0 0 4 5h6a4 4 0 0 0 4-5l-2-6V3" />
  </svg>
);

const IconBuild = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
    <path d="M12 3v18M3 12h18M5 5l14 14M19 5 5 19" />
  </svg>
);

const IconOutcome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
    <path d="m5 12 5 5L20 7" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const SOLUTIONS = [
  { n: "01", title: "Insurance Verification",   bottleneck: "Manual morning eligibility calls",  build: "Overnight bulk coverage audits",         outcome: "Denials drop near zero" },
  { n: "02", title: "Multilingual Reminders",   bottleneck: "15%+ no-show rate",                 build: "Multi-language text + voice automation", outcome: "Saved hours, full waiting room" },
  { n: "03", title: "Prior Auth Tracker",       bottleneck: "Auths stuck in insurer queues",     build: "Pipeline tracing dashboard",             outcome: "Faster treatment approvals" },
  { n: "04", title: "Pre-Visit Patient Summary",bottleneck: "Exam minutes lost digging EHRs",    build: "1-page consolidated chart",              outcome: "Every visit runs on time" },
  { n: "05", title: "Cross-Location Sync",      bottleneck: "Fragmented site charts",            build: "Real-time consistency layer",            outcome: "Continuous patient care" },
];

const PROCESS = [
  { n: "01", label: "Diagnostic Call", time: "15 min", line: "Targeted questions. No pitch." },
  { n: "02", label: "Written Report",  time: "48 hrs", line: "Where your hours are leaking." },
  { n: "03", label: "Fixed Proposal",  time: "4–6 wks", line: "Fixed scope. Fixed price." },
];

/* ------------------------------------------------------------------ */
/*  Work gallery — Unsplash placeholders, replace with your screenshots*/
/* ------------------------------------------------------------------ */

const WORK_GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    caption: "NurMed — clinical operations dashboard",
    location: "St. Mary's Medical Center, NY",
  },
  {
    src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
    caption: "Front-desk workflow optimization",
    location: "Independent practice, UAE",
  },
  {
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    caption: "Cross-location records sync rollout",
    location: "Multi-site clinic network, US",
  },
  {
    src: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
    caption: "Pre-visit summary tool, live deployment",
    location: "Specialty surgery group",
  },
];

/* ------------------------------------------------------------------ */
/*  Atoms                                                              */
/* ------------------------------------------------------------------ */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-[#0f172a]/55">
    <span className="text-[#7c3aed]"><IconDot /></span>
    {children}
  </div>
);

const OutlineBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2.5 rounded-full border border-[#0f172a]/15 bg-[#f5f5f4]/60 backdrop-blur-sm px-4 py-1.5">
    <span className="relative flex h-2 w-2">
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] animate-ping opacity-50" />
      <span className="relative h-2 w-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb]" />
    </span>
    <span className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#0f172a]/75">
      {children}
    </span>
  </div>
);

const PrimaryCTA = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    href={href}
    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#0f172a] pl-7 pr-2 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.45)]"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
    <span className="relative">{children}</span>
    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white overflow-hidden">
      <span className="absolute inset-0 flex items-center justify-center text-[#0f172a] translate-x-0 group-hover:translate-x-full transition-transform duration-300">
        <IconArrow className="h-3.5 w-3.5" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center text-[#0f172a] -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
        <IconArrow className="h-3.5 w-3.5" />
      </span>
    </span>
  </Link>
);

/* ------------------------------------------------------------------ */
/*  Inline diagnostic booking form                                     */
/* ------------------------------------------------------------------ */

type BookingState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; meetingLink: string }
  | { status: "error"; message: string };

function DiagnosticBookingForm() {
  const [form, setForm] = useState({
    name: "",
    practice: "",
    email: "",
    schedule: "",
    bottleneck: "",
  });
  const [state, setState] = useState<BookingState>({ status: "idle" });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state.status === "loading") return;
    setState({ status: "loading" });
    try {
      const res = await fetch("/api/healthcare-book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setState({ status: "error", message: data?.error || "Submission failed." });
        return;
      }
      setState({ status: "success", meetingLink: data.meetingLink });
    } catch {
      setState({ status: "error", message: "Network error. Please try again." });
    }
  };

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-[#0f172a]/10 bg-white p-8 md:p-12 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="m5 12 5 5L20 7" />
          </svg>
        </div>
        <h3 className="font-semibold tracking-[-0.02em] text-2xl md:text-3xl text-[#0f172a]">
          You&rsquo;re booked.
        </h3>
        <p className="mt-3 text-[#475569] max-w-md mx-auto leading-relaxed">
          A confirmation email is on its way to <span className="font-semibold text-[#0f172a]">{form.email}</span> with your meeting link and the slot you chose.
        </p>
        <a
          href={state.meetingLink}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white hover:bg-gradient-to-r hover:from-[#7c3aed] hover:to-[#2563eb] transition-all"
        >
          Join the diagnostic call
          <IconArrow className="h-3.5 w-3.5" />
        </a>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-[#0f172a]/12 bg-[#f8fafc] text-[#0f172a] placeholder:text-[#94a3b8] px-4 py-3 text-[0.95rem] outline-none transition-all focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10";
  const labelCls =
    "block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[#0f172a]/55 mb-2";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-[#0f172a]/10 bg-white p-8 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor="hb-name">Full name</label>
          <input
            id="hb-name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Dr. Jane Doe"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="hb-practice">Practice / Hospital</label>
          <input
            id="hb-practice"
            required
            value={form.practice}
            onChange={update("practice")}
            placeholder="Acme Family Medicine"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="hb-email">Professional email</label>
          <input
            id="hb-email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="jane@acmemed.com"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="hb-schedule">Preferred date &amp; time</label>
          <input
            id="hb-schedule"
            type="datetime-local"
            required
            value={form.schedule}
            onChange={update("schedule")}
            className={inputCls}
          />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls} htmlFor="hb-bottleneck">Operational bottleneck</label>
          <textarea
            id="hb-bottleneck"
            required
            value={form.bottleneck}
            onChange={update("bottleneck")}
            rows={4}
            placeholder="Where is your practice losing the most hours? (e.g. eligibility checks, no-shows, prior auth tracking)"
            className={`${inputCls} resize-none`}
          />
        </div>
      </div>

      {state.status === "error" && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </div>
      )}

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-[#64748b] max-w-md">
          We respond within 48 hours with a written diagnostic. No pitch, no follow-up sequence.
        </p>
        <button
          type="submit"
          disabled={state.status === "loading"}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#0f172a] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_18px_36px_-10px_rgba(37,99,235,0.45)] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          {state.status === "loading" ? (
            <>
              <svg viewBox="0 0 24 24" className="relative h-4 w-4 animate-spin" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="relative">Booking your call…</span>
            </>
          ) : (
            <>
              <span className="relative">Book diagnostic call</span>
              <IconArrow className="relative h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HealthcarePage() {
  return (
    <div
      className={`${interTight.variable} ${ttLakes.variable} min-h-screen bg-[#e5e5e4] text-[#0f172a] selection:bg-[#7c3aed]/20`}
      style={{ fontFamily: "var(--font-display), ui-sans-serif, system-ui" }}
    >
      {/* Atmospheric layer */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#7c3aed] opacity-[0.07] blur-[140px]" />
        <div className="absolute top-1/2 -right-32 w-[480px] h-[480px] rounded-full bg-[#2563eb] opacity-[0.07] blur-[140px]" />
      </div>

      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-32 pb-24 md:pb-32">
          <div className="flex justify-center mb-12">
            <OutlineBadge>Healthcare Workflow Software — Vol. 01</OutlineBadge>
          </div>

          <h1 className="text-center font-semibold tracking-[-0.035em] text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.95] max-w-5xl mx-auto">
            <span className="text-[#0f172a]">Cut admin burden.</span>
            <br />
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent font-bold">
              Not patient care.
            </span>
          </h1>

          <p className="mt-10 text-center text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-[1.55] font-medium">
            Focused workflow software for independent practices.
            <br className="hidden md:block" />
            One operational fix. Four to six weeks. Fixed price.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
            <PrimaryCTA href="#book">
              Book free 15-min diagnostic
            </PrimaryCTA>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f172a]/80 hover:text-[#7c3aed] transition-colors"
            >
              <span className="border-b border-[#0f172a]/20 pb-0.5">
                See the five fixes
              </span>
            </a>
          </div>

          <p
            className="mt-10 text-center text-[0.95rem] text-[#64748b] max-w-md mx-auto"
            style={{ fontFamily: "var(--font-accent), sans-serif" }}
          >
            If we cannot help, we will tell you straight.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CREDENTIAL TICKER                                            */}
      {/* ============================================================ */}
      <section className="relative">
        <div className="border-y border-[#0f172a]/10 bg-[#ececeb]/60 backdrop-blur-sm overflow-hidden">
          <div className="relative flex">
            <div className="flex shrink-0 animate-[ticker_40s_linear_infinite] items-center gap-12 py-5 pr-12 whitespace-nowrap">
              {Array.from({ length: 2 }).map((_, dupIdx) => (
                <div key={dupIdx} className="flex items-center gap-12 pr-12">
                  {[
                    ["NurMed", "Hospital workflow system"],
                    ["Live in 7 hospitals", "US + UAE"],
                    ["HIPAA Compliant", "By design"],
                    ["42 CFR Part 2", "Where applies"],
                    ["Fixed Price", "No hourly billing"],
                    ["4–6 Week Delivery", "Written scope"],
                  ].map(([k, v], i) => (
                    <div key={`${dupIdx}-${i}`} className="flex items-center gap-3">
                      <span className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent text-sm font-bold tracking-tight">
                        {k}
                      </span>
                      <span className="text-xs tracking-[0.18em] uppercase text-[#0f172a]/55 font-semibold">
                        {v}
                      </span>
                      <span className="text-[#0f172a]/25 ml-3">/</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes ticker {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ============================================================ */}
      {/*  WORK GALLERY — proof in production                           */}
      {/* ============================================================ */}
      <section className="relative">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <Eyebrow>Proof — Live Deployments</Eyebrow>
              <h2 className="mt-6 font-semibold tracking-[-0.025em] text-[2rem] md:text-[3rem] leading-[1] text-[#0f172a]">
                Real systems.{" "}
                <span
                  className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent font-bold"
                  style={{ fontFamily: "var(--font-accent), sans-serif" }}                >
                  Real practices.
                </span>
              </h2>
            </div>
            <p className="text-sm text-[#475569] max-w-xs md:text-right">
              Selected work from US and UAE deployments.
            </p>
          </div>

          {/* Asymmetric gallery — large hero + 3 stacked */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Hero image */}
            <figure className="group relative overflow-hidden rounded-2xl border border-[#0f172a]/10 bg-[#ececeb] md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[480px]">
              <Image
                src={WORK_GALLERY[0].src}
                alt={WORK_GALLERY[0].caption}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/20 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                <div className="text-[0.62rem] tracking-[0.22em] uppercase text-white/65 font-bold mb-2">
                  Feature deployment
                </div>
                <div className="font-semibold tracking-[-0.015em] text-lg md:text-xl text-white">
                  {WORK_GALLERY[0].caption}
                </div>
                <div className="text-sm text-white/65 mt-1">{WORK_GALLERY[0].location}</div>
              </figcaption>
            </figure>

            {/* Smaller tiles */}
            {WORK_GALLERY.slice(1).map((img) => (
              <figure
                key={img.src}
                className="group relative overflow-hidden rounded-2xl border border-[#0f172a]/10 bg-[#ececeb] md:col-span-5 aspect-[16/10]"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/75 via-[#0f172a]/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-semibold tracking-[-0.015em] text-sm text-white">
                    {img.caption}
                  </div>
                  <div className="text-xs text-white/60 mt-0.5">{img.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Tiny placeholder note — easy to delete later */}
          <p className="mt-6 text-xs text-[#94a3b8] italic text-center">
            Placeholder imagery — to be replaced with deployment screenshots.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SOLUTIONS                                                    */}
      {/* ============================================================ */}
      <section id="solutions" className="relative scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
            <div className="max-w-2xl">
              <Eyebrow>Chapter I — What We Build</Eyebrow>
              <h2 className="mt-6 font-semibold tracking-[-0.025em] text-[2.5rem] md:text-[4rem] leading-[0.98] text-[#0f172a]">
                Five focused fixes.
                <br />
                <span
                  className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent font-bold"
                  style={{ fontFamily: "var(--font-accent), sans-serif" }}                >
                  Five real wins.
                </span>
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#475569] max-w-xs md:text-right font-medium">
              Each is a standalone project.
              <br />
              Pick the one bleeding the most hours.
            </p>
          </div>

          {/* Cards — softened palette */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {SOLUTIONS.map((s, i) => {
              const spanMap = ["md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-2", "md:col-span-2"];
              return (
                <article
                  key={s.n}
                  className={`group relative overflow-hidden rounded-2xl border border-[#0f172a]/8 bg-[#ececeb]/80 backdrop-blur-sm p-7 md:p-9 transition-all duration-300 hover:border-[#2563eb] hover:bg-[#f5f5f4] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-1 ${spanMap[i]}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-7">
                    <div>
                      <div className="text-[0.7rem] tracking-[0.22em] uppercase text-[#0f172a]/40 font-semibold mb-3">
                        {s.n}
                      </div>
                      <h3 className="font-semibold tracking-[-0.02em] text-[1.5rem] md:text-[1.85rem] leading-[1.1] text-[#0f172a]">
                        {s.title}
                      </h3>
                    </div>
                    <div className="text-[3rem] md:text-[3.5rem] leading-none font-semibold text-[#0f172a]/[0.05] tracking-tighter transition-colors duration-500 group-hover:text-[#7c3aed]/15">
                      {s.n}
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-[#0f172a]/10">
                    {/* Bottleneck */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#0f172a]/10 bg-[#e5e5e4] text-[#0f172a]/55">
                        <IconBottleneck />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.62rem] tracking-[0.22em] uppercase text-[#0f172a]/45 font-bold mb-0.5">
                          Bottleneck
                        </div>
                        <div className="text-[0.92rem] text-[#1e293b] font-medium leading-snug">
                          {s.bottleneck}
                        </div>
                      </div>
                    </div>

                    {/* Built */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#0f172a]/10 bg-[#e5e5e4] text-[#0f172a]/55">
                        <IconBuild />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.62rem] tracking-[0.22em] uppercase text-[#0f172a]/45 font-bold mb-0.5">
                          Built
                        </div>
                        <div className="text-[0.92rem] text-[#1e293b] font-medium leading-snug">
                          {s.build}
                        </div>
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white">
                        <IconOutcome />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.62rem] tracking-[0.22em] uppercase font-bold mb-0.5 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent">
                          Outcome
                        </div>
                        <div className="text-[0.92rem] text-[#0f172a] font-semibold leading-snug">
                          {s.outcome}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] transition-all duration-700 ease-out group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROCESS                                                      */}
      {/* ============================================================ */}
      <section className="relative">
        <div className="border-t border-[#0f172a]/10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <div className="text-center mb-20 md:mb-28">
            <div className="flex justify-center">
              <Eyebrow>Chapter II — How We Work</Eyebrow>
            </div>
            <h2 className="mt-6 font-semibold tracking-[-0.025em] text-[2.5rem] md:text-[4rem] leading-[0.98] text-[#0f172a] max-w-4xl mx-auto">
              Three steps.{" "}
              <span
                className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent font-bold"
                style={{ fontFamily: "var(--font-accent), sans-serif" }}              >
                Zero commitment
              </span>
              <br />
              until the third.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROCESS.map((p) => (
              <div
                key={p.n}
                className="group relative overflow-hidden rounded-2xl border border-[#0f172a]/8 bg-[#ececeb]/80 backdrop-blur-sm p-8 md:p-10 transition-all duration-300 hover:border-[#7c3aed] hover:bg-[#f5f5f4] hover:shadow-[0_20px_40px_rgba(124,58,237,0.08)] hover:-translate-y-1"
              >
                <div
                  aria-hidden
                  className="absolute -top-4 -right-2 font-semibold text-[10rem] md:text-[12rem] leading-none tracking-tighter bg-gradient-to-br from-[#7c3aed]/10 to-[#2563eb]/10 bg-clip-text text-transparent select-none transition-all duration-500 group-hover:from-[#7c3aed]/25 group-hover:to-[#2563eb]/25"
                >
                  {p.n}
                </div>

                <div className="relative">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0f172a]/15 bg-[#e5e5e4] px-3 py-1 mb-8">
                    <span className="h-1 w-1 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb]" />
                    <span className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[#0f172a]/70">
                      {p.time}
                    </span>
                  </div>

                  <h3 className="font-semibold tracking-[-0.02em] text-[1.5rem] md:text-[1.75rem] leading-[1.1] text-[#0f172a]">
                    {p.label}
                  </h3>

                  <div className="my-5 h-px w-10 bg-gradient-to-r from-[#7c3aed] to-[#2563eb]" />

                  <p className="text-[0.92rem] text-[#475569] font-medium leading-snug">
                    {p.line}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs tracking-[0.16em] uppercase text-[#0f172a]/55 font-semibold">
            {["Written Scope", "Fixed Price", "4–6 Weeks", "Built To Fit"].map((p, i) => (
              <div key={p} className="flex items-center gap-3">
                {i > 0 && <span className="text-[#0f172a]/20">+</span>}
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BOOKING FORM — native diagnostic scheduler                   */}
      {/* ============================================================ */}
      <section id="book" className="relative scroll-mt-24">
        <div className="border-t border-[#0f172a]/10" />
        <div className="mx-auto max-w-[960px] px-6 md:px-10 py-24 md:py-32">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center">
              <Eyebrow>Chapter III — Book Your Call</Eyebrow>
            </div>
            <h2 className="mt-6 font-semibold tracking-[-0.025em] text-[2.25rem] md:text-[3.5rem] leading-[1] text-[#0f172a] max-w-3xl mx-auto">
              Reserve your{" "}
              <span
                className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent font-bold"
                style={{ fontFamily: "var(--font-accent), sans-serif" }}              >
                15-minute diagnostic
              </span>
              .
            </h2>
            <p className="mt-5 text-[#475569] max-w-xl mx-auto leading-relaxed">
              Tell us where the hours are leaking. We&rsquo;ll send back a written diagnostic within 48 hours and a private video room for the call.
            </p>
          </div>

          <DiagnosticBookingForm />
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="relative bg-[#0f172a] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-[#7c3aed] opacity-25 blur-[120px]" />
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-[#2563eb] opacity-25 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]" />
                <span className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-white/75">
                  Next Step
                </span>
              </div>
            </div>

            <h2 className="font-semibold tracking-[-0.03em] text-[2.75rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] max-w-4xl mx-auto">
              Tell us where your practice is{" "}
              <span
                className="bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent font-bold"
                style={{ fontFamily: "var(--font-accent), sans-serif" }}              >
                losing hours.
              </span>
            </h2>

            <p className="mt-10 text-base md:text-lg text-white/65 max-w-xl mx-auto leading-[1.55]">
              15 minutes on the phone. Written diagnostic in 48 hours.
              <br className="hidden md:block" />
              No pitch. No charge. No follow-up sequence.
            </p>

            <div className="mt-14">
              <Link
                href="#book"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white pl-7 pr-2 py-2 text-sm font-semibold text-[#0f172a] transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative group-hover:text-white transition-colors duration-300">
                  Book your diagnostic call
                </span>
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#0f172a] overflow-hidden group-hover:bg-white transition-colors duration-300">
                  <span className="absolute inset-0 flex items-center justify-center text-white group-hover:text-[#0f172a] transition-colors duration-300">
                    <IconArrow className="h-3.5 w-3.5" />
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-24 md:mt-32 pt-10 border-t border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start">
              <div className="md:col-span-2">
                <div className="text-[0.68rem] tracking-[0.22em] uppercase text-white/45 font-bold mb-3">
                  Direct Line
                </div>
                <div className="font-semibold tracking-[-0.015em] text-xl text-white">
                  Muhammad Mujtaba Rehman
                </div>
                <div
                  className="text-sm text-white/55 mt-0.5"
                  style={{ fontFamily: "var(--font-accent), sans-serif" }}
                >
                  Founder, Quishub
                </div>
              </div>

              <a href="mailto:mujtaba@quishub.com" className="group block">
                <div className="text-[0.68rem] tracking-[0.22em] uppercase text-white/45 font-bold mb-3">
                  Email
                </div>
                <div className="text-sm font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-[#a78bfa] group-hover:to-[#60a5fa] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  mujtaba@quishub.com
                </div>
              </a>

              <a href="tel:+15162667724" className="group block">
                <div className="text-[0.68rem] tracking-[0.22em] uppercase text-white/45 font-bold mb-3">
                  Phone
                </div>
                <div className="text-sm font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-[#a78bfa] group-hover:to-[#60a5fa] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  +1 (516) 266-7724
                </div>
              </a>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.72rem] tracking-[0.18em] uppercase text-white/40 font-semibold">
            <div>© {new Date().getFullYear()} Quishub</div>
            <div
              className="normal-case tracking-normal text-white/55 text-sm"
              style={{ fontFamily: "var(--font-accent), sans-serif" }}
            >
              Built for independent practices. Trusted in hospitals.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
