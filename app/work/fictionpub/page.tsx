"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import SideGradients from "@/components/ui/SideGradients";
import CTA from "@/components/sections/CTA";
import { ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const pipelineSteps = [
  {
    title: "Market & Concept",
    description:
      "The engine begins with market research and high-level story conceptualization.",
  },
  {
    title: "Character & World Building",
    description:
      "Detailed profiles and setting descriptions are generated to ensure internal consistency.",
  },
  {
    title: "Structural Plotting",
    description:
      "The system breaks the concept into a chapter-by-chapter plot structure before a single word of prose is written.",
  },
  {
    title: "Draft Generation",
    description:
      "Utilizing a distributed task queue, the system generates the full manuscript, streaming content to the user in real-time.",
  },
  {
    title: "LLM-as-Judge (The Quality Gate)",
    description:
      "Every chapter is evaluated for creativity, coherence, and pacing. If a section scores below 70%, the system automatically triggers a regeneration.",
  },
];

const engineeringStack = [
  {
    title: "Multi-Provider AI Strategy",
    description:
      "We dynamically route tasks between Anthropic and OpenAI based on the specific requirements of the task (e.g., creative prose vs. logical plotting).",
  },
  {
    title: "Distributed Task Management",
    description:
      "A Celery + Redis queue manages long-running generation jobs (20\u201330 minutes), ensuring system stability at scale.",
  },
  {
    title: "Real-Time Feedback",
    description:
      "WebSocket streaming allows writers to watch their novel come to life paragraph by paragraph, rather than waiting for a single bulk delivery.",
  },
  {
    title: "Opik Prompt Governance",
    description:
      'We manage over 500+ genre-specific prompts with rigorous versioning and A/B testing to ensure "Hard Sci-Fi" feels different from "Regency Romance."',
  },
  {
    title: "Auto-Recovery Systems",
    description:
      'Our "Zero Lost Work" protocol detects stuck tasks and allows the generation to resume from any stage in the event of a network or API interruption.',
  },
];

const metrics = [
  { label: "User Base", value: "20,000+ Active Writers" },
  { label: "Manuscript Length", value: "Up to 100,000 Words" },
  { label: "Generation Speed", value: "~30 Minutes per Novel" },
  { label: "Quality Standard", value: "70% Automated Quality Gate" },
];

export default function FictionPubPage() {
  return (
    <div className="bg-[#050a14] min-h-screen text-white">
      <SideGradients />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="relative z-10 container-content max-w-[900px] mx-auto">
          <div>
            <div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 mb-8"
                style={{ background: "linear-gradient(90deg, #22d3ee 0%, #a3e635 100%)", color: "#050a14", boxShadow: "0 4px 14px -4px rgba(163,230,53,0.4)" }}
              >
                <ArrowLeft size={16} />
                Back to Work
              </Link>
            </div>

            <div>
              <SectionLabel>
                Creative Tech &middot; United States
              </SectionLabel>
            </div>

            <h1
              className="font-display font-semibold tracking-heading text-white mt-4"
              style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.1 }}
            >
              System Architecture & Platform Overview:{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#a3e635]">FictionPub.ai</span>
            </h1>

            <p
              className="mt-4 text-lg text-slate-400 font-medium"
            >
              Solving the &ldquo;Blank Page&rdquo; Problem at Scale
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-16 md:pb-20">
        <div className="container-content max-w-[900px] mx-auto">
          <div className="space-y-6">
            <p
              className="text-base leading-body text-slate-400"
            >
              Writing a novel is an endurance sport that traditionally takes months or years. While
              most AI tools offer short-form assistance&mdash;a paragraph here, a scene
              there&mdash;<strong className="text-[#a3e635]">FictionPub.ai</strong> is the first
              enterprise-grade platform built to solve the full manuscript. From students to
              professional authors, our 20,000+ users move from a single concept to a 100,000-word
              draft in under 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="pb-16 md:pb-20">
        <div className="container-content max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-semibold tracking-heading text-white mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              The Creative Pipeline: From Concept to Manuscript
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-quishub-border/20 bg-white"
            >
              <img
                src="/images/FictionPub%20Detail%20page.jpeg"
                alt="FictionPub.ai Architecture Diagram"
                className="w-full max-h-[70vh] object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pipeline Steps */}
      <section className="pb-16 md:pb-20">
        <div className="container-content max-w-[900px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-semibold tracking-heading text-white mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              The Multi-Stage Generative Pipeline
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pipelineSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group bg-[#0f172a] border border-slate-800 rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,211,238,0.1)] hover:border-[#22d3ee]/30"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#22d3ee] to-[#a3e635] text-[#050a14] text-sm font-semibold mb-3">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2 transition-all duration-300 group-hover:text-[#a3e635]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-body text-slate-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Stack */}
      <section className="pb-16 md:pb-20">
        <div className="container-content max-w-[900px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-semibold tracking-heading text-white mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              The Engineering Behind the Narrative
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base leading-body text-slate-400 mb-8"
            >
              To handle the immense computational load of generating 100,000-word manuscripts for
              thousands of users simultaneously, our backend utilizes a &ldquo;Resilient Creative
              Stack&rdquo;:
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineeringStack.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group bg-[#0f172a] border border-slate-800 rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,211,238,0.1)] hover:border-[#22d3ee]/30"
                >
                  <h3 className="text-sm font-semibold text-white mb-2 transition-all duration-300 group-hover:text-[#a3e635]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-body text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance & Reach */}
      <section className="pb-16 md:pb-20">
        <div className="container-content max-w-[900px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-semibold tracking-heading text-white mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Performance &amp; Reach
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base leading-body text-slate-400 mb-8"
            >
              FictionPub.ai is currently the leading full-length manuscript generator in the US
              market.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-x-auto"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 pr-4 text-sm font-semibold text-white">Metric</th>
                    <th className="py-3 pl-4 text-sm font-semibold text-white">Achievement</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((m) => (
                    <tr key={m.label} className="border-b border-slate-800/50">
                      <td className="py-3 pr-4 text-sm font-medium text-white/80">{m.label}</td>
                      <td className="py-3 pl-4 text-sm font-semibold text-[#a3e635]">{m.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Access */}
      <section className="pb-16 md:pb-20">
        <div className="container-content max-w-[900px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-semibold tracking-heading text-white mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Experience the Platform
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group bg-[#0f172a] border border-slate-800 rounded-card p-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(34,211,238,0.1)] hover:border-[#22d3ee]/30"
            >
              <h4 className="text-sm font-semibold text-white mb-1">Live Application</h4>
              <p className="text-sm text-slate-400">app.fictionpub.ai</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTA variant="dark" />
    </div>
  );
}
