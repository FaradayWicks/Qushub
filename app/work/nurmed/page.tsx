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
    title: "Retrieve (Ambient Capture)",
    description:
      "The system securely captures the audio stream of the patient-doctor conversation or processes digital intake forms as the primary reference context.",
  },
  {
    title: "Process (Entity Recognition)",
    description:
      "High-fidelity speech-to-text conversion is paired with Clinical Entity Recognition (CER) to identify symptoms, medications, and history.",
  },
  {
    title: "Structure (RAG-Based Generation)",
    description:
      "Using Retrieval-Augmented Generation, the engine drafts clinical notes (such as SOAP notes) grounded in established clinical guidelines and the specific patient\u2019s history.",
  },
  {
    title: "Review (Validation)",
    description:
      "An automated clinical review layer scans for potential hallucinations or inconsistencies before the doctor sees the draft.",
  },
  {
    title: "Finalize (EHR Integration)",
    description:
      "The final output is formatted into EHR-ready documents, ready for one-click integration into the hospital\u2019s existing management system.",
  },
];

const metrics = [
  {
    label: "Turnaround Time (TAT)",
    before: "44 Minutes",
    after: "29 Minutes",
    improvement: "-15 Minutes",
  },
  {
    label: "Consultation Duration",
    before: "Standard",
    after: "Reduced by 34%",
    improvement: "More patients served",
  },
  {
    label: "Impact Velocity",
    before: "N/A",
    after: "Week 1",
    improvement: "Immediate ROI",
  },
];

const governance = [
  {
    title: "HIPAA/GDPR Alignment",
    description:
      "End-to-end encryption for all medical data streams and stored records.",
  },
  {
    title: "Admin/Clinician Dashboard",
    description:
      "Centralized management for hospital administrators to track efficiency metrics and manage user licenses.",
  },
  {
    title: "Role-Based Access",
    description:
      "Strict partitioning ensuring only authorized medical personnel can access or edit patient records.",
  },
];

const deployments = [
  { label: "Main Platform", value: "Live at agent.nurmed.com" },
  {
    label: "Partner Systems",
    value:
      "Currently integrating with Medi-Link Systems and local private practices to streamline outpatient workflows.",
  },
];

export default function NurMedPage() {
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
                Healthcare &middot; US / UAE
              </SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-display font-semibold tracking-heading text-quishub-black mt-4"
              style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.1 }}
            >
              System Architecture & Platform Overview:{" "}
              <span className="gradient-text">NurMed</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-4 text-lg text-quishub-muted font-medium"
            >
              Restoring the Patient-Doctor Connection
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
              The primary bottleneck in modern healthcare is no longer just medical
              complexity&mdash;it is documentation. Doctors in Pakistan and abroad spend a
              disproportionate amount of every consultation typing into systems while patients wait,
              leading to &ldquo;screen fatigue&rdquo; and a degraded patient experience.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base leading-body text-quishub-muted"
            >
              <strong className="text-quishub-black">NurMed</strong> is an AI-driven clinical
              documentation platform designed to handle the heavy lifting of medical charting. By
              automating the transcription and structuring of clinical notes, NurMed allows doctors
              to focus on the person in front of them, not the keyboard.
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
              How It Works: The Clinical Workflow
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-quishub-border/20 bg-white"
            >
              <img
                src="/images/system-architecture-diagram-for-nurmed-ai-clinical.jpeg"
                alt="NurMed Architecture Diagram"
                className="w-full max-h-[70vh] object-contain"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 text-base leading-body text-quishub-muted"
            >
              NurMed utilizes a specialized{" "}
              <strong className="text-quishub-black">Clinical AI Orchestration Engine</strong> to
              ensure that documentation is not just fast, but medically accurate and properly
              structured. The process follows a secure, five-stage pipeline:
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

      {/* Proven Impact */}
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
              Proven Impact on Efficiency
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-x-auto"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-quishub-border">
                    <th className="py-3 pr-4 text-sm font-semibold text-quishub-black">Metric</th>
                    <th className="py-3 px-4 text-sm font-semibold text-quishub-black">Before NurMed</th>
                    <th className="py-3 px-4 text-sm font-semibold text-quishub-black">With NurMed</th>
                    <th className="py-3 pl-4 text-sm font-semibold text-quishub-black">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((m) => (
                    <tr key={m.label} className="border-b border-quishub-border/50">
                      <td className="py-3 pr-4 text-sm font-medium text-quishub-black">{m.label}</td>
                      <td className="py-3 px-4 text-sm text-quishub-muted">{m.before}</td>
                      <td className="py-3 px-4 text-sm text-quishub-muted">{m.after}</td>
                      <td className="py-3 pl-4 text-sm font-semibold gradient-text">{m.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-10 surface-card rounded-card p-8 border-l-4 border-[#7c3aed]"
            >
              <p className="text-base leading-body text-quishub-muted italic">
                &ldquo;Doctors are enjoying the convenience of typing much less&mdash;if at all.
                Patients feel they&apos;ve been served more quickly, and our team feels much less
                fatigued by the documentation workload.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-quishub-black">
                &mdash; Clinical Team, Avenue Broadwalk General Practice
              </footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Security & Governance */}
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
              className="font-semibold tracking-heading text-quishub-black mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Security & Institutional Governance
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base leading-body text-quishub-muted mb-8"
            >
              Built for the sensitive nature of medical data, the NurMed architecture includes:
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
              Live Deployments
            </motion.h2>

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
