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
    <>
      <SideGradients />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="relative z-10 container-content max-w-[900px] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 mb-8"
                style={{ background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)", boxShadow: "0 4px 14px -4px rgba(124,58,237,0.4)" }}
              >
                <ArrowLeft size={16} />
                Back to Work
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
              <SectionLabel variant="dark" className="text-quishub-black border-quishub-black/20">
                Hospitality &amp; Retail Intelligence &middot; Dubai / US
              </SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-display font-semibold tracking-heading text-quishub-black mt-4"
              style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.1 }}
            >
              System Architecture & Platform Overview:{" "}
              <span className="gradient-text">Senteez</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-4 text-lg text-quishub-muted font-medium"
            >
              Beyond the Star Rating: Intelligence for Hospitality &amp; Retail
            </motion.p>
          </motion.div>
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
              className="text-base leading-body text-quishub-muted"
            >
              In the high-stakes markets of Dubai and the US, a 4.2-star rating is a vanity metric
              that hides the truth. It doesn&apos;t tell an operator if the air conditioning in Room
              302 is failing or if the service speed at a specific coffee branch has dropped since
              last month.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base leading-body text-quishub-muted"
            >
              <strong className="text-quishub-black">Senteez</strong> is a feedback intelligence
              platform that moves beyond averages. By ingesting thousands of reviews across multiple
              global platforms, Senteez uses fine-tuned NLP models to extract the &ldquo;why&rdquo;
              behind the rating, giving teams a decision engine they can actually act on.
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
              className="font-semibold tracking-heading text-quishub-black mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              How It Works: The Intelligence Pipeline
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-quishub-border/20 w-full max-w-none bg-black"
            >
              <video
                src="/videos/subtle-camera-push-in-and-gentle-glow-pulse-on-the.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-h-[70vh] object-contain"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 text-base leading-body text-quishub-muted"
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
                className="group surface-card rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.3),0_0_40px_rgba(37,99,235,0.15)] hover:border-[rgba(124,58,237,0.25)]"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white text-sm font-semibold mb-3">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold text-quishub-black mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#7c3aed]">
                  {step.title}
                </h3>
                <p className="text-sm leading-body text-quishub-muted">{step.description}</p>
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
              className="font-semibold tracking-heading text-quishub-black mb-8"
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
                  className="group surface-card rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.3),0_0_40px_rgba(37,99,235,0.15)] hover:border-[rgba(124,58,237,0.25)]"
                >
                  <h3 className="text-sm font-semibold text-quishub-black mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#7c3aed]">
                    {layer.title}
                  </h3>
                  <p className="text-sm leading-body text-quishub-muted">{layer.description}</p>
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
              className="font-semibold tracking-heading text-quishub-black mb-8"
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
                  <tr className="border-b border-quishub-border">
                    <th className="py-3 pr-4 text-sm font-semibold text-quishub-black">Sector</th>
                    <th className="py-3 px-4 text-sm font-semibold text-quishub-black">Coverage</th>
                    <th className="py-3 pl-4 text-sm font-semibold text-quishub-black">Review Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {impactData.map((row) => (
                    <tr key={row.sector} className="border-b border-quishub-border/50">
                      <td className="py-3 pr-4 text-sm font-medium text-quishub-black">{row.sector}</td>
                      <td className="py-3 px-4 text-sm text-quishub-muted">{row.coverage}</td>
                      <td className="py-3 pl-4 text-sm font-semibold gradient-text">{row.volume}</td>
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
              className="font-semibold tracking-heading text-quishub-black mb-8"
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
                  className="group surface-card rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.3),0_0_40px_rgba(37,99,235,0.15)] hover:border-[rgba(124,58,237,0.25)]"
                >
                  <h3 className="text-sm font-semibold text-quishub-black mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#7c3aed]">
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-body text-quishub-muted">{feat.description}</p>
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
              className="font-semibold tracking-heading text-quishub-black mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Access the Platform
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group surface-card rounded-card p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3),0_0_40px_rgba(37,99,235,0.15)] hover:border-[rgba(124,58,237,0.25)]"
            >
              <h4 className="text-sm font-semibold text-quishub-black mb-1">Live Application</h4>
              <p className="text-sm text-quishub-muted">senteez.com</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
