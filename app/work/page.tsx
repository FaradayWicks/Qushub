"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import SectionLabel from "@/components/ui/SectionLabel";
import CTA from "@/components/sections/CTA";
import SideGradients from "@/components/ui/SideGradients";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const caseStudies = [
  {
    slug: "paklawassist",
    tag: "Legal Tech - Pakistan",
    title: "Smart legal software for Pakistani enterprise growth.",
    image: "/images/paklawassist.jpg",
    problem:
      "Startups and businesses in Pakistan struggled to get reliable legal guidance. Generic online tools provided US/UK-focused answers that didn't apply locally. Traditional legal consultants were expensive and slow, leaving businesses exposed to compliance risks.",
    built:
      "PakLawAssist — a smart legal platform built specifically for Pakistan's regulatory framework. The system retrieves local legal context before generating guidance, ensuring every contract, compliance answer, and legal document is grounded in Pakistan-specific law—not generic templates.",
    live: [
      "Full platform serving businesses at agent.paklawassist.com",
      "Knowledge system deployed with SMEDA (Government of Pakistan)",
      "Knowledge system deployed with PSIC (Government of Pakistan)",
      "International version serving global markets at nuworo.com",
    ],
    technical:
      "Multi-step quality process: research, reason, generate, validate, and format. Role-based access for institutional deployments. Usage governance and clean document outputs.",
  },
  {
    slug: "nurmed",
    tag: "Healthcare - US/UAE",
    title: "Clinical software cutting consultation times by 34%.",
    image: "/images/nurmed-ai.jpg",
    problem:
      "Doctors were spending a third of every consultation on documentation—typing notes while patients waited. This created fatigue, reduced patient face-time, and slowed clinic throughput. It was an efficiency problem, a burnout risk, and a patient experience issue all at once.",
    built:
      "NurMed — a smart clinical documentation platform that automates note-taking so doctors can focus on patients. Structured reports, consistent formatting, and seamless workflow integration. Built for real clinical environments, not demonstrations.",
    metrics: [
      { value: "44 min", label: "Consultation time before" },
      { value: "29 min", label: "Consultation time after" },
      { value: "34%", label: "Reduction in visit duration" },
      { value: "Week 1", label: "Time to measurable impact" },
    ],
    quote:
      "They are very much enjoying the use and convenience of typing much less if at all. Patients feel happier that they've been served quickly and doctors feel much less fatigued by the typing work.",
    attribution: "Clinical Team, Avenue Broadwalk General Practice",
  },
  {
    slug: "senteez",
    tag: "Hospitality & Retail Intelligence - Dubai / US",
    title: "Turning 23,000+ reviews into actionable business intelligence.",
    image: "/images/senteez.jpg",
    problem:
      "Star ratings are blunt. A 4.2 doesn't reveal what customers loved, what's breaking the experience, or what changed last month. Hotel and retail operators were making decisions based on averages—missing the specific, actionable insights hidden in thousands of written reviews.",
    built:
      "Senteez — a feedback intelligence platform that collects reviews from Google, TripAdvisor, Facebook, and more, then automatically extracts patterns and insights. Sentiment analysis, topic detection, and trend tracking turn scattered feedback into a clear decision-making system.",
    live: [
      "11,127 reviews analyzed across 8 Dubai Marina hotels",
      "6,007 reviews analyzed across 9 Dubai Marina restaurants",
      "6,067 reviews analyzed across 5 US coffee brands",
      "Live platform at senteez.com",
    ],
  },
  {
    slug: "fictionpub",
    tag: "Creative Tech - United States",
    title: "Helping 20,000+ writers generate full length novels in minutes.",
    image: "/images/fictionpub-ai.jpg",
    problem:
      "Writers—from students to professional authors—were spending weeks or months getting to a first draft. The blank page problem is real. Most writing tools give you a paragraph, maybe a scene. Nobody had solved the full manuscript workflow.",
    built:
      "FictionPub.ai — an enterprise-grade manuscript generation platform that takes writers from concept to complete novel. The workflow covers market research, story development, character building, plot structure, full draft creation, and quality assessment. Every section is evaluated for creativity, coherence, and engagement before delivery.",
    metrics: [
      { value: "20K+", label: "Active writers in the US" },
      { value: "100K", label: "Words per manuscript" },
      { value: "30 min", label: "Full novel generation time" },
      { value: "70%+", label: "Quality score threshold" },
    ],
    live: ["Live at app.fictionpub.ai"],
  },
];

function CaseStudyDetails({ study }: { study: any }) {
  return (
    <div className="space-y-6">
      {/* ALWAYS VISIBLE CONTENT */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-label-wide text-quishub-black">
          The problem
        </h3>
        <p className="mt-2 text-sm leading-body text-quishub-muted">
          {study.problem}
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-label-wide text-quishub-black">
          What we built
        </h3>
        <p className="mt-2 text-sm leading-body text-quishub-muted">
          {study.built}
        </p>
      </div>

      {study.live && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-label-wide text-quishub-black">
            What&apos;s live
          </h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {study.live.map((item: string) => (
              <li
                key={item}
                className="surface-subtle rounded-[8px] px-4 py-3 text-sm text-quishub-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {study.metrics && (
        <div className="grid grid-cols-2 gap-4">
          {study.metrics.map((metric: any) => (
            <div
              key={metric.label}
              className="surface-subtle rounded-[8px] p-5"
            >
              <p className="text-2xl font-bold text-quishub-black">
                {metric.value}
              </p>
              <p className="mt-1 text-[13px] text-quishub-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {study.technical && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-label-wide text-quishub-black">
            Technical depth
          </h3>
          <p className="mt-2 text-sm leading-body text-quishub-muted">
            {study.technical}
          </p>
        </div>
      )}

      {study.technicalList && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-label-wide text-quishub-black">
            The engineering behind it
          </h3>
          <ul className="mt-3 space-y-2">
            {study.technicalList.map((item: string) => (
              <li
                key={item}
                className="surface-subtle rounded-[8px] px-4 py-3 text-sm text-quishub-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {study.quote && (
        <blockquote className="surface-subtle rounded-[8px] p-5">
          <p className="text-sm leading-body text-quishub-muted">
            &ldquo;{study.quote}&rdquo;
          </p>
          <footer className="mt-3 text-xs text-quishub-black">
            {study.attribution}
          </footer>
        </blockquote>
      )}
    </div>
  );
}

export default function WorkPage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = useCallback(
    (slug: string | null) => {
      if (!slug) return;
      router.push(`/work/${slug}`);
    },
    [router]
  );

  return (
    <>
      {/* Full-screen curtain transition */}


      <SideGradients />
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="relative z-10 container-content pointer-events-none">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="max-w-[760px] mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-display text-quishub-black font-semibold tracking-[-0.05em] leading-[1.05]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Work that ships.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-6 text-lg text-quishub-muted leading-relaxed"
            >
              Every project here is live. Real clients, real systems, real
              outcomes.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Infinity Transition Gradient */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-40 md:h-56 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, rgb(var(--quishub-surface-rgb)))' }}
        />
      </section>

      <section className="section-light section-padding">
        <div className="container-content">
          <div className="space-y-10">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => handleCardClick(study.slug)}
                className={`group relative surface-card rounded-card p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(124,58,237,0.3),0_0_40px_rgba(37,99,235,0.15)] hover:border-[rgba(124,58,237,0.25)] ${
                  study.slug ? "cursor-pointer" : ""
                }`}
              >
                <SectionLabel variant="dark" className="text-quishub-black border-quishub-black/20">
                  {study.tag}
                </SectionLabel>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <h2
                      className="font-semibold tracking-heading text-quishub-black transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#7c3aed] group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]"
                      style={{ fontSize: "clamp(26px, 3vw, 40px)" }}
                    >
                      {study.title}
                    </h2>
                    
                    {study.image && (
                      <div className="mt-8 md:mt-12 rounded-2xl overflow-hidden shadow-2xl border border-quishub-border/20">
                        <img 
                          src={study.image} 
                          alt={study.tag} 
                          className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" 
                        />
                      </div>
                    )}
                  </div>

                  <CaseStudyDetails study={study} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
