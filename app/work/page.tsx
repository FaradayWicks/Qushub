"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import SectionLabel from "@/components/ui/SectionLabel";
import CTA from "@/components/sections/CTA";
import SideGradients from "@/components/ui/SideGradients";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const caseStudies = [
  {
    slug: "paklawassist",
    tag: "Legal Tech - Pakistan",
    title: "AI legal readiness for Pakistan's startup and SME ecosystem.",
    image: "/images/project_law.png",
    problem:
      "Startups and businesses in Pakistan had no reliable way to get legally grounded guidance. Generic LLMs gave generic answers with US/UK-style assumptions that didn't apply locally. Legal consultants were expensive and slow.",
    built:
      "PakLawAssist - a RAG-first legal platform grounded to Pakistan's actual legal and regulatory framework. Before generating anything, the system retrieves relevant local legal context. Contract drafting, contract review, compliance guidance, and petition drafting are grounded to Pakistan-specific law, not generic templates.",
    live: [
      "Full application at agent.paklawassist.com",
      "Knowledge chatbot deployed with SMEDA",
      "Knowledge chatbot deployed with PSIC",
      "International version live at nuworo.com",
    ],
    technical:
      "Multi-step RAG orchestration: retrieve, reason, generate, validate, and format. Role-based access control for institutional deployments. Usage quotas and admin governance. Clean document outputs - not chat text.",
  },
  {
    slug: "nurmed",
    tag: "Healthcare - US/UAE",
    title: "AI clinical documentation that gave doctors their time back.",
    image: "/images/project_health.png",
    problem:
      "Doctors were spending a disproportionate amount of every consultation on documentation - typing while patients waited. It wasn't just an efficiency problem. It was a fatigue problem. And a patient experience problem.",
    built:
      "NurMed - an AI clinical documentation platform that handles the typing so doctors don't have to. Structured note generation, clinical summaries, and consistent output format. Built to work in a live clinical environment, not a controlled demo.",
    metrics: [
      { value: "44 min", label: "TAT before NurMed" },
      { value: "29 min", label: "TAT after NurMed" },
      { value: "34%", label: "Reduction in consultation time" },
      { value: "Week 1", label: "Time to measurable impact" },
    ],
    quote:
      "They are very much enjoying the use and convenience of typing much less if at all. Patients feel happier that they've been served quickly and doctors feel much less fatigued by the typing work.",
    attribution: "Clinical Team, Avenue Broadwalk General Practice",
  },
  {
    slug: "senteez",
    tag: "Hospitality & Retail Intelligence - Dubai / US",
    title: "Turning 23,000 customer reviews into decisions teams can act on.",
    image: "/images/project_hospitality.png",
    problem:
      "Star ratings are blunt. A 4.2 doesn't tell you what guests loved, what's breaking the experience, or what changed last month. Hotel and restaurant operators were making decisions based on averages - and missing everything specific and actionable underneath them.",
    built:
      "Senteez - a feedback intelligence platform that ingests reviews from Google Business, TripAdvisor, Facebook, BestBuy, and more, runs NLP analysis with fine-tuned models, and extracts structured insights. Sentiment, intent detection, topic modeling, and named entity recognition turn reviews into a decision engine.",
    live: [
      "11,127 reviews across 8 Dubai Marina hotels",
      "6,007 reviews across 9 Dubai Marina restaurants",
      "6,067 reviews across 5 US coffee brands",
      "Live at senteez.com",
    ],
  },
  {
    slug: "fictionpub",
    tag: "Creative Tech - United States",
    title: "Full-length AI novels. 20,000 users. 20-30 minutes.",
    image: "/images/project_novel.png",
    problem:
      "Writers - from students to professional authors - were spending weeks or months getting to a first draft. The blank page problem is real. Most AI writing tools give you a paragraph, maybe a scene. Nobody had solved the full manuscript.",
    built:
      "FictionPub.ai - an enterprise-grade manuscript generation platform that takes a writer from concept to complete novel. The pipeline covers market research, story concept, character development, chapter-by-chapter plot structure, full draft generation, and quality evaluation. Every section is assessed by an LLM-as-Judge system before delivery - creativity, coherence, engagement, and pacing. Below 70%, it regenerates automatically.",
    technicalList: [
      "Multi-provider AI strategy - Anthropic + OpenAI, model selected per task type",
      "Celery + Redis distributed task queue - handles 20-30 minute generation jobs at scale",
      "WebSocket real-time streaming - writers see content generated paragraph by paragraph",
      "LLM-as-Judge quality gates - automated evaluation and regeneration before delivery",
      "Opik prompt management - 500+ genre-specific prompts with versioning and A/B testing",
      "Auto-recovery - stuck task detection, resume from any stage, zero lost work",
    ],
    metrics: [
      { value: "20K+", label: "Active users in the US" },
      { value: "100K", label: "Words per manuscript" },
      { value: "30 min", label: "Full novel generation time" },
      { value: "70%+", label: "AI quality score gate" },
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
  const [transitioning, setTransitioning] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = useCallback(
    (slug: string | null, index: number) => {
      if (!slug) return;
      setTransitioning(index);
      setTimeout(() => {
        router.push(`/work/${slug}`);
      }, 400);
    },
    [router]
  );

  return (
    <>
      {/* Full-screen curtain transition */}
      <AnimatePresence>
        {transitioning !== null && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] origin-bottom"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #5b3fef 30%, #3b5fe8 60%, #2563eb 100%)",
            }}
          />
        )}
      </AnimatePresence>

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
                animate={
                  transitioning === index
                    ? { scale: 1.02, y: -10, opacity: 0.7 }
                    : transitioning !== null
                    ? { opacity: 0, y: 20 }
                    : {}
                }
                onClick={() => handleCardClick(study.slug, index)}
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
    </>
  );
}
