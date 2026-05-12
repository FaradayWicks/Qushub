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
    title: "Retrieve",
    description:
      "The system queries a specialized vector database containing Pakistan's statutory laws, regulatory guidelines, and legal precedents to fetch the exact local context required.",
  },
  {
    title: "Reason",
    description:
      "The engine analyzes the retrieved context against the user's prompt to ensure applicability and prevent hallucinations.",
  },
  {
    title: "Generate",
    description:
      "The LLM drafts the response or document — such as a contract or petition — strictly constrained by the retrieved local legal framework.",
  },
  {
    title: "Validate",
    description:
      "An automated validation layer checks the output for structural integrity and alignment with the initial prompt.",
  },
  {
    title: "Format",
    description:
      "Instead of outputting raw chat text, the system compiles the final output into clean, professionally formatted, and downloadable legal documents.",
  },
];

const capabilities = [
  {
    title: "Localized Contract Drafting & Review",
    description:
      "Generates and reviews agreements based on Pakistani corporate and contract law, bypassing generic, localized templates.",
  },
  {
    title: "Compliance Guidance",
    description:
      "Provides accurate regulatory roadmaps tailored for local startups and SMEs.",
  },
  {
    title: "Petition Drafting",
    description:
      "Structures formal legal petitions aligned with the formats required by local courts and regulatory bodies.",
  },
  {
    title: "Clean Document Output",
    description:
      "Seamlessly transitions from AI generation to production-ready documents without the clutter of conversational AI text.",
  },
];

const governance = [
  {
    title: "Role-Based Access Control (RBAC)",
    description:
      "Secure partitioning of data and platform capabilities based on user roles and institutional hierarchies.",
  },
  {
    title: "Usage Quotas & Rate Limiting",
    description:
      "Automated token and generation tracking to manage infrastructure costs and API limits.",
  },
  {
    title: "Admin Governance",
    description:
      "A centralized dashboard for institutional partners to monitor usage, manage users, and audit platform activity.",
  },
];

const deployments = [
  { label: "Core Application", value: "Live at agent.paklawassist.com" },
  { label: "SMEDA", value: "Custom Knowledge Chatbot deployed with SMEDA (Small and Medium Enterprises Development Authority)" },
  { label: "PSIC", value: "Custom Knowledge Chatbot deployed with PSIC (Punjab Small Industries Corporation)" },
  { label: "Global Reach", value: "The underlying architecture powers our international legal tech variant, live at nuworo.com" },
];

export default function PakLawAssistPage() {
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
                Legal Tech · Pakistan
              </SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-display font-semibold tracking-heading text-quishub-black mt-4"
              style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.1 }}
            >
              System Architecture & Platform Overview:{" "}
              <span className="gradient-text">PakLawAssist</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-4 text-lg text-quishub-muted font-medium"
            >
              Revolutionizing Legal Tech for Pakistan&apos;s Ecosystem
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
              Startups and SMEs in Pakistan face a significant barrier to entry regarding reliable
              legal guidance. Traditional legal consultancy is often prohibitively expensive and slow,
              while generic Large Language Models (LLMs) default to US or UK-centric assumptions that
              hold no legal weight in Pakistan.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base leading-body text-quishub-muted"
            >
              PakLawAssist was built to bridge this gap. It is a purpose-built, RAG-first legal AI
              platform explicitly grounded in Pakistan&apos;s actual legal and regulatory frameworks,
              delivering contextually accurate guidance and ready-to-use legal documents.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram */}
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
              How It Works: The Architecture Flow
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-quishub-border/20 bg-white"
            >
              <img
                src="/images/system-architecture-diagram-for-paklawassist-legal.jpeg"
                alt="PakLawAssist Architecture Diagram"
                className="w-full max-h-[70vh] object-contain"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 text-base leading-body text-quishub-muted"
            >
              Unlike standard chat interfaces, PakLawAssist relies on a robust Multi-Step RAG
              (Retrieval-Augmented Generation) Orchestration pipeline to ensure legal accuracy and
              reliability. When a user requests a document or compliance check, the system processes
              the request through five distinct architectural layers:
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Steps */}
      <section className="pb-16 md:pb-20">
        <div className="container-content max-w-[900px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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

      {/* Core Capabilities */}
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
              Core Platform Capabilities
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap) => (
                <motion.div
                  key={cap.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group surface-card rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.3),0_0_40px_rgba(37,99,235,0.15)] hover:border-[rgba(124,58,237,0.25)]"
                >
                  <h3 className="text-base font-semibold text-quishub-black mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#7c3aed]">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-body text-quishub-muted">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Governance */}
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
              Enterprise & Institutional Governance
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base leading-body text-quishub-muted mb-8"
            >
              To support institutional deployments and secure B2B usage, the platform architecture
              includes comprehensive backend governance:
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {governance.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group surface-card rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.3),0_0_40px_rgba(37,99,235,0.15)] hover:border-[rgba(124,58,237,0.25)]"
                >
                  <h3 className="text-sm font-semibold text-quishub-black mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#7c3aed]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-body text-quishub-muted">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Deployments */}
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
              Live Ecosystem & Deployments
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base leading-body text-quishub-muted mb-8"
            >
              The PakLawAssist architecture is highly scalable and currently supports multiple live
              deployments across the public and private sectors:
            </motion.p>

            <div className="space-y-4">
              {deployments.map((dep) => (
                <motion.div
                  key={dep.label}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group surface-card rounded-card p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3),0_0_40px_rgba(37,99,235,0.15)] hover:border-[rgba(124,58,237,0.25)]"
                >
                  <h4 className="text-sm font-semibold text-quishub-black mb-1">{dep.label}</h4>
                  <p className="text-sm text-quishub-muted">{dep.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
