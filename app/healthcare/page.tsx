"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HealthcareBookingSystem from "@/components/healthcare/HealthcareBookingSystem";
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
  {
    n: "01",
    title: "Insurance Verification Automation",
    bottleneck: "Front desk spends hours every morning on manual eligibility calls, leading to coverage surprise errors after patients are seen.",
    build: "An automated system that runs bulk eligibility audits overnight before patients arrive, flagging discrepancies automatically.",
    timeline: "4 to 6 Weeks Deployment",
    outcome: "Claims denials drop near zero, eligibility surprises vanish, and front desk staff reclaims hours of productive operational time daily.",
    bestFor: "Practices where manual insurance tracking consumes meaningful front-desk velocity every single day."
  },
  {
    n: "02",
    title: "Smart Multilingual Patient Reminders",
    bottleneck: "Manual reminder workflows eat staff hours while rigid English-only notifications fail when patient bases speak multiple languages.",
    build: "Automated omni-channel text and voice automation contacting patients globally in their exact native language layout preferences.",
    timeline: "4 to 6 Weeks Deployment",
    outcome: "No-show rates plummet below target caps, manual calling drops to zero, and the daily waiting room calendar remains optimally filled.",
    bestFor: "Practices serving multi-ethnic communities or struggling with persistent no-show rates above 15%."
  },
  {
    n: "03",
    title: "Prior Authorization Tracking System",
    bottleneck: "Prior auth tokens get stuck in insurer queues for weeks with zero pipeline visibility, causing procedure delays.",
    build: "An intelligent centralized tracking dashboard monitoring auth streams from submission to final signature with automated follow-ups.",
    timeline: "4 to 6 Weeks Deployment",
    outcome: "Drastically accelerated treatment approvals, full pipeline transparency, and seamless patient communications on insurance status.",
    bestFor: "Pain management, behavioral health, addiction medicine, specialty surgery, or high-volume authorization clinics."
  },
  {
    n: "04",
    title: "Pre-Visit Patient Summary Tool",
    bottleneck: "Providers lose critical consultation minutes digging through rigid EHRs, fragmented labs, and past allergy text files mid-visit.",
    build: "An automated compilation engine generating a single-page consolidated clinical summary chart pulled securely before patient arrival.",
    timeline: "4 to 6 Weeks Deployment",
    outcome: "Every clinical visit runs strictly on time, documentation accuracy scales, and patients feel truly heard by fully prepared doctors.",
    bestFor: "Solo physicians and small group practices where the provider represents the core operational center of the facility."
  },
  {
    n: "05",
    title: "Cross-Location Patient Records Sync",
    bottleneck: "Multi-site medical practices suffer from highly fragmented charts, forcing staff into constant cross-location phone calls.",
    build: "A high-performance real-time data synchronization layer maintaining chart and medical ledger consistency across separate endpoints.",
    timeline: "4 to 6 Weeks Deployment",
    outcome: "Continuous, unified patient care journeys across any clinic branch, zero redundant inner calling, and instant chart updates.",
    bestFor: "Practices managing two or more active healthcare facilities where patient cohorts rotate between locations."
  },
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
  {
    src: "/images/healthcare/Real Systems.jpg",
    caption: "Real systems in action",
    location: "Healthcare deployment",
  },
  {
    src: "/images/healthcare/Real Practices.jpg",
    caption: "Real practices",
    location: "Healthcare deployment",
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
/*  Healthcare Calendar Picker                                         */
/* ------------------------------------------------------------------ */

const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM",
];

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function isAvailableDay(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  if (date < minDate) return false;
  const dow = date.getDay();
  return dow >= 1 && dow <= 5;
}

function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDateTime(date: Date, time: string): string {
  const dateStr = date.toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "numeric",
  });
  return `${dateStr} at ${time}`;
}

function HealthcareCalendarPicker({ 
  onSelect, 
  onClose 
}: { 
  onSelect: (dateTime: string) => void;
  onClose: () => void;
}) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const canGoPrev =
    year > today.getFullYear() ||
    (year === today.getFullYear() && month > today.getMonth());

  const handleDateClick = (day: number) => {
    const d = new Date(year, month, day);
    if (!isAvailableDay(d)) return;
    setSelectedDate(d);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onSelect(formatDateTime(selectedDate, selectedTime));
    }
  };

  return (
    <div className="absolute z-50 mt-2 rounded-2xl border border-[#0f172a]/10 bg-white shadow-2xl p-4 w-[320px] md:w-[360px]">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          disabled={!canGoPrev}
          className="p-2 rounded-lg hover:bg-[#f8fafc] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-sm font-semibold text-[#0f172a]">
          {MONTHS[month]} {year}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="p-2 rounded-lg hover:bg-[#f8fafc] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[0.65rem] font-semibold text-[#94a3b8] py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDow }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const available = isAvailableDay(date);
          const isSelected = selectedDate && sameDay(date, selectedDate);

          return (
            <button
              key={day}
              type="button"
              onClick={() => handleDateClick(day)}
              disabled={!available}
              className={`h-8 w-8 rounded-lg text-sm font-medium transition-all ${
                isSelected
                  ? "bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white"
                  : available
                  ? "hover:bg-[#f8fafc] text-[#0f172a]"
                  : "text-[#cbd5e1] cursor-not-allowed"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-4 pt-4 border-t border-[#0f172a]/10">
          <p className="text-xs font-semibold text-[#0f172a]/60 mb-3 uppercase tracking-wider">
            Select time slot
          </p>
          <div className="grid grid-cols-3 gap-2 max-h-[120px] overflow-y-auto">
            {TIME_SLOTS.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => handleTimeSelect(time)}
                className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedTime === time
                    ? "bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white"
                    : "bg-[#f8fafc] hover:bg-[#e2e8f0] text-[#0f172a]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#0f172a]/10">
        <button
          type="button"
          onClick={onClose}
          className="text-xs font-medium text-[#64748b] hover:text-[#0f172a] transition-colors"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          disabled={!selectedDate || !selectedTime}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Healthcare Booking System Component                                */
/* ------------------------------------------------------------------ */
/* Component imported from @/components/healthcare/HealthcareBookingSystem */

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HealthcarePage() {
  return (
    <div
      className={`${interTight.variable} ${ttLakes.variable} min-h-screen bg-[#EBF3FC] text-[#0f172a] selection:bg-[#7c3aed]/20`}
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
        <div className="border-y border-[#0f172a]/10 bg-[#EBF3FC]/60 backdrop-blur-sm overflow-hidden">
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

          {/* Gallery — equal sized boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WORK_GALLERY.map((img) => (
              <figure
                key={img.src}
                className="group relative overflow-hidden rounded-2xl border border-[#0f172a]/10 bg-[#EBF3FC] aspect-[4/3]"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/20 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[0.62rem] tracking-[0.22em] uppercase text-white/65 font-bold mb-1">
                    Feature deployment
                  </div>
                  <div className="font-semibold tracking-[-0.015em] text-sm md:text-base text-white">
                    {img.caption}
                  </div>
                  <div className="text-xs text-white/65 mt-0.5">{img.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/*  SOLUTIONS — Premium Masterclass Layout                       */}
      {/* ============================================================ */}
      <section id="solutions" className="relative scroll-mt-24 bg-[#EBF3FC]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          {/* Header with Stats Bar */}
          <div className="text-center mb-16 md:mb-20">
            <Eyebrow>Chapter I — What We Build</Eyebrow>
            <h2 className="mt-6 font-semibold tracking-[-0.025em] text-[2.5rem] md:text-[4rem] leading-[0.98] text-[#0f172a]">
              Five focused fixes.
              <br />
              <span
                className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent font-bold"
                style={{ fontFamily: "var(--font-accent), sans-serif" }}
              >
                Five real wins.
              </span>
            </h2>

            {/* Premium Stats Bar */}
            <div className="mt-10 inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#0f172a]/8 p-2 shadow-sm">
              <div className="flex items-center gap-3 px-6 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white font-bold text-lg">
                  5+
                </div>
                <div className="text-left">
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#0f172a]/50 font-bold">Standalone</div>
                  <div className="text-sm font-semibold text-[#0f172a]">Fixes</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-[#0f172a]/10" />
              <div className="flex items-center gap-3 px-6 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#0f172a]/50 font-bold">Deployment</div>
                  <div className="text-sm font-semibold text-[#0f172a]">4 to 6 Weeks</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-[#0f172a]/10" />
              <div className="flex items-center gap-3 px-6 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white font-bold">
                  %
                </div>
                <div className="text-left">
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#0f172a]/50 font-bold">Transparent</div>
                  <div className="text-sm font-semibold text-[#0f172a]">Fixed Pricing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Cards — Offset Layout */}
          <div className="space-y-8 md:space-y-12">
            {SOLUTIONS.map((s, i) => (
              <article
                key={s.n}
                className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                {/* Text Content */}
                <div className={`space-y-6 ${i % 2 === 1 ? 'lg:order-2 lg:direction-ltr' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white font-bold text-xl">
                      {s.n}
                    </span>
                    <h3 className="font-semibold tracking-[-0.02em] text-[1.75rem] md:text-[2.25rem] leading-[1.1] text-[#0f172a]">
                      {s.title}
                    </h3>
                  </div>

                  <div className="space-y-5 pl-2">
                    {/* Bottleneck */}
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#ef4444]/30 bg-[#ef4444]/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" />
                      </div>
                      <div>
                        <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#ef4444]/70 font-bold mb-1">The Problem</div>
                        <p className="text-[0.95rem] text-[#475569] leading-relaxed">{s.bottleneck}</p>
                      </div>
                    </div>

                    {/* What We Build */}
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#2563eb]/30 bg-[#2563eb]/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
                      </div>
                      <div>
                        <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#2563eb]/70 font-bold mb-1">The Solution</div>
                        <p className="text-[0.95rem] text-[#1e293b] font-medium leading-relaxed">{s.build}</p>
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#2563eb]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3 text-white">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[0.65rem] tracking-[0.2em] uppercase bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent font-bold mb-1">The Result</div>
                        <p className="text-[0.95rem] text-[#0f172a] font-semibold leading-relaxed">{s.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#0f172a]/5 border border-[#0f172a]/10 px-4 py-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#2563eb]">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-sm font-medium text-[#0f172a]">{s.timeline}</span>
                  </div>
                </div>

                {/* Preview Card */}
                <div className={`relative ${i % 2 === 1 ? 'lg:order-1 lg:direction-ltr' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] border border-[#0f172a]/5">
                    {/* Mockup Header */}
                    <div className="flex items-center gap-2 px-5 py-4 border-b border-[#0f172a]/5 bg-gradient-to-r from-[#f8fafc] to-white">
                      <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-[#ef4444]/20" />
                        <span className="h-3 w-3 rounded-full bg-[#f59e0b]/20" />
                        <span className="h-3 w-3 rounded-full bg-[#22c55e]/20" />
                      </div>
                      <span className="ml-3 text-xs font-medium text-[#0f172a]/40">quishub.healthcare</span>
                    </div>

                    {/* Mockup Content */}
                    <div className="p-6 space-y-4">
                      {/* Status Indicators */}
                      <div className="flex flex-wrap gap-2">
                        {i === 0 && (
                          <>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22c55e]/10 px-3 py-1.5 text-xs font-medium text-[#22c55e]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                              eligibility-checks
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563eb]/10 px-3 py-1.5 text-xs font-medium text-[#2563eb]">
                              247 audits completed
                            </span>
                          </>
                        )}
                        {i === 1 && (
                          <>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7c3aed]/10 px-3 py-1.5 text-xs font-medium text-[#7c3aed]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
                              reminders-sent
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22c55e]/10 px-3 py-1.5 text-xs font-medium text-[#22c55e]">
                              89% confirmed
                            </span>
                          </>
                        )}
                        {i === 2 && (
                          <>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f59e0b]/10 px-3 py-1.5 text-xs font-medium text-[#f59e0b]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                              prior-auth-dashboard
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563eb]/10 px-3 py-1.5 text-xs font-medium text-[#2563eb]">
                              12 pending approvals
                            </span>
                          </>
                        )}
                        {i === 3 && (
                          <>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563eb]/10 px-3 py-1.5 text-xs font-medium text-[#2563eb]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] animate-pulse" />
                              patient-summary-ready
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7c3aed]/10 px-3 py-1.5 text-xs font-medium text-[#7c3aed]">
                              3 mins saved/visit
                            </span>
                          </>
                        )}
                        {i === 4 && (
                          <>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22c55e]/10 px-3 py-1.5 text-xs font-medium text-[#22c55e]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                              cross-location-sync
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563eb]/10 px-3 py-1.5 text-xs font-medium text-[#2563eb]">
                              4 sites connected
                            </span>
                          </>
                        )}
                      </div>

                      {/* Card Number & Title - Top of Card */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#2563eb]/20">
                            <span className="text-2xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent">
                              {s.n}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-[#0f172a]">{s.title}</p>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
                        {/* Background Images */}
                        {i === 0 && (
                          <>
                            <Image
                              src="/images/healthcare/clinical-desk.jpg"
                              alt="Clinical desk"
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-white/10 rounded-xl" />
                          </>
                        )}
                        {i === 1 && (
                          <>
                            <Image
                              src="/images/healthcare/Smart Multilingual Patient Reminders.png"
                              alt="Smart Multilingual Patient Reminders"
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-white/10 rounded-xl" />
                          </>
                        )}
                        {i === 2 && (
                          <>
                            <Image
                              src="/images/healthcare/Prior Authorization Tracking System.jpg"
                              alt="Prior Authorization Tracking System"
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-white/10 rounded-xl" />
                          </>
                        )}
                        {i === 3 && (
                          <>
                            <Image
                              src="/images/healthcare/Pre-Visit Patient Summary.jpg"
                              alt="Pre-Visit Patient Summary"
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-white/10 rounded-xl" />
                          </>
                        )}
                        {i === 4 && (
                          <>
                            <Image
                              src="/images/healthcare/Cross-Location Sync.jpg"
                              alt="Cross-Location Sync"
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-white/10 rounded-xl" />
                          </>
                        )}
                        {/* Decorative Grid */}
                        <div className="absolute inset-0 opacity-[0.03] z-20 pointer-events-none" style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)`,
                          backgroundSize: '24px 24px'
                        }} />
                      </div>

                      {/* Footer Stats */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-[#64748b]">{s.bestFor}</span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0f172a]">
                          Live Preview
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Shadow */}
                  <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-[#7c3aed]/10 to-[#2563eb]/10 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                </div>
              </article>
            ))}
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
                className="group relative overflow-hidden rounded-2xl border border-[#0f172a]/8 bg-[#EBF3FC]/80 backdrop-blur-sm p-8 md:p-10 transition-all duration-300 hover:border-[#7c3aed] hover:bg-[#EBF3FC] hover:shadow-[0_20px_40px_rgba(124,58,237,0.08)] hover:-translate-y-1"
              >
                <div
                  aria-hidden
                  className="absolute -top-4 -right-2 font-semibold text-[10rem] md:text-[12rem] leading-none tracking-tighter bg-gradient-to-br from-[#7c3aed]/10 to-[#2563eb]/10 bg-clip-text text-transparent select-none transition-all duration-500 group-hover:from-[#7c3aed]/25 group-hover:to-[#2563eb]/25"
                >
                  {p.n}
                </div>

                <div className="relative">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0f172a]/15 bg-[#EBF3FC] px-3 py-1 mb-8">
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

          <HealthcareBookingSystem />
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

              <a href="mailto:hello@quishub.com" className="group block">
                <div className="text-[0.68rem] tracking-[0.22em] uppercase text-white/45 font-bold mb-3">
                  Email
                </div>
                <div className="text-sm font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-[#a78bfa] group-hover:to-[#60a5fa] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  hello@quishub.com
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
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <div>© {new Date().getFullYear()} Quishub</div>
              <div className="flex items-center gap-4 text-xs text-slate-400 font-medium normal-case tracking-normal">
                <Link href="/privacy" className="hover:text-[#2152c4] hover:underline transition-colors">Privacy Policy</Link>
                <span className="text-slate-300">|</span>
                <Link href="/terms" className="hover:text-[#2152c4] hover:underline transition-colors">Terms & Conditions</Link>
              </div>
            </div>
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
