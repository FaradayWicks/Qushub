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

const steps = [
  {
    title: "Ingest (Multi-Channel Aggregator)",
    description:
      "The system connects via API or web scrapers to Google Business, TripAdvisor, Facebook, BestBuy, and industry-specific platforms to pull raw review data in real-time.",
  },
  {
    title: "Analyze (The NLP Core)",
    description:
      "The engine runs four distinct analysis layers: Sentiment Analysis, Intent Detection, Topic Modeling, and Named Entity Recognition (NER) to extract multi-dimensional insights from every review.",
  },
  {
    title: "Structure",
    description:
      "Raw data is converted into a decision-ready schema, allowing for cross-location benchmarking and historical trend tracking.",
  },
  {
    title: "Visualize & Act",
    description:
      'Insights are delivered via an executive dashboard, highlighting "Critical Fixes" and "Success Patterns" rather than just a total score.',
  },
];

const nlpLayers = [
  {
    title: "Sentiment Analysis",
    description: "Detecting the emotional tone of every sentence.",
  },
  {
    title: "Intent Detection",
    description: "Identifying if a user is complaining, recommending, or asking a question.",
  },
  {
    title: "Topic Modeling",
    description:
      'Grouping feedback into categories like "Cleanliness," "Staff Behavior," or "Value for Money."',
  },
  {
    title: "Named Entity Recognition (NER)",
    description: "Pinpointing specific mentions of employees, dishes, or locations.",
  },
];

const impactData = [
  {
    sector: "Dubai Marina Hotels",
    coverage: "8 Luxury Properties",
    volume: "11,127 Reviews",
  },
  {
    sector: "Dubai Marina Restaurants",
    coverage: "9 Dining Establishments",
    volume: "6,007 Reviews",
  },
  {
    sector: "US Coffee Brands",
    coverage: "5 National Brands",
    volume: "6,067 Reviews",
  },
];

const features = [
  {
    title: "Cross-Platform Benchmarking",
    description:
      "Compare your performance on TripAdvisor against Google Business in a single view.",
  },
  {
    title: "Competitor Intelligence",
    description:
      "Ingest competitor reviews to identify their weaknesses and capitalize on market gaps.",
  },
  {
    title: "Alert System",
    description:
      "Automated notifications for high-intent negative reviews to allow for rapid recovery.",
  },
  {
    title: "Scalable Data Infrastructure",
    description: "Built to handle millions of reviews with low-latency processing.",
  },
];

export default function SenteezPage() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">
      <SideGradients />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="relative z-10 container-content max-w-[900px] mx-auto">
          <div>
            <div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 mb-8"
                style={{ background: "linear-gradient(90deg, #002147 0%, #0ea5e9 100%)", boxShadow: "0 4px 14px -4px rgba(14,165,233,0.4)" }}
              >
                <ArrowLeft size={16} />
                Back to Work
              </Link>
            </div>

            <div>
              <SectionLabel>
                Hospitality &amp; Retail Intelligence &middot; Dubai / US
              </SectionLabel>
            </div>

            <h1
              className="font-display font-semibold tracking-heading text-[#002147] mt-4"
              style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.1 }}
            >
              System Architecture & Platform Overview:{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#002147] to-[#0ea5e9]">Senteez</span>
            </h1>

            <p
              className="mt-4 text-lg text-slate-600 font-medium"
            >
              Beyond the Star Rating: Intelligence for Hospitality &amp; Retail
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-16 md:pb-20">
        <div className="container-content max-w-[900px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-6"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base leading-body text-slate-600"
            >
              The primary bottleneck in modern hospitality is no longer just service
              speed&mdash;it is intelligence. Operators in Dubai and the US often rely on vanity metrics
              that hide the truth. A 4.2-star rating doesn&apos;t tell you why specific rooms or dishes are failing.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base leading-body text-slate-600"
            >
              <strong className="text-[#002147]">Senteez</strong> is an AI-driven feedback
              intelligence platform designed to move beyond averages. By ingesting thousands of reviews across multiple
              global platforms, Senteez uses fine-tuned NLP models to extract actionable insights.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Video / Architecture */}
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
              className="font-semibold tracking-heading text-[#002147] mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              How It Works: The Intelligence Pipeline
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-quishub-border/20 w-full max-w-none bg-white"
            >
              <img
                src="/images/Senteez%20Detail%20page.jpg"
                alt="Senteez AI Architecture Diagram"
                className="w-full max-h-[70vh] object-contain"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 text-base leading-body text-slate-600"
            >
              The Senteez architecture is built to handle massive data throughput, converting
              unstructured text into structured, multi-dimensional insights through a four-stage
              process:
            </motion.p>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group bg-slate-50 border border-slate-200 rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0ea5e9]/30"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#002147] to-[#0ea5e9] text-white text-sm font-semibold mb-3">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-[#002147] mb-2 transition-all duration-300 group-hover:text-[#0ea5e9]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-body text-slate-600">{step.description}</p>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* NLP Analysis Layers */}
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
              className="font-semibold tracking-heading text-[#002147] mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              NLP Analysis Layers
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {nlpLayers.map((layer) => (
                <motion.div
                  key={layer.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group bg-slate-50 border border-slate-200 rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0ea5e9]/30"
                >
                  <h3 className="text-sm font-semibold text-[#002147] mb-2 transition-all duration-300 group-hover:text-[#0ea5e9]">
                    {layer.title}
                  </h3>
                  <p className="text-sm leading-body text-slate-600">{layer.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Global Impact */}
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
              className="font-semibold tracking-heading text-[#002147] mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Live Global Impact
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-x-auto"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 pr-4 text-sm font-semibold text-[#002147]">Sector</th>
                    <th className="py-3 px-4 text-sm font-semibold text-[#002147]">Coverage</th>
                    <th className="py-3 pl-4 text-sm font-semibold text-[#002147]">Review Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {impactData.map((row) => (
                    <tr key={row.sector} className="border-b border-slate-100">
                      <td className="py-3 pr-4 text-sm font-medium text-[#002147]">{row.sector}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{row.coverage}</td>
                      <td className="py-3 pl-4 text-sm font-semibold text-[#0ea5e9]">{row.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features */}
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
              className="font-semibold tracking-heading text-[#002147] mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Enterprise-Grade Features
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feat) => (
                <motion.div
                  key={feat.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group bg-slate-50 border border-slate-200 rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0ea5e9]/30"
                >
                  <h3 className="text-sm font-semibold text-[#002147] mb-2 transition-all duration-300 group-hover:text-[#0ea5e9]">
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-body text-slate-600">{feat.description}</p>
                </motion.div>
              ))}
            </div>
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
              className="font-semibold tracking-heading text-[#002147] mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Access the Platform
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group bg-slate-50 border border-slate-200 rounded-card p-5 transition-all duration-300 hover:shadow-lg hover:border-[#0ea5e9]/30"
            >
              <h4 className="text-sm font-semibold text-[#002147] mb-1">Live Application</h4>
              <p className="text-sm text-slate-600">senteez.com</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
