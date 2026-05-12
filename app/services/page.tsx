"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Layers,
  Server,
  Zap,
  Database,
  Shield,
  Search,
  PenTool,
  Rocket,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import CTA from "@/components/sections/CTA";
import SideGradients from "@/components/ui/SideGradients";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: Brain,
    title: "AI & LLM Integration",
    description:
      "Most teams treat LLM integration as a feature. We treat it as a system. That means proper context management, retrieval pipelines that pull the right information, evaluation layers that measure output quality, and monitoring that tells you when something drifts. We handle model selection, prompt engineering, fine-tuning strategy, and the production infrastructure that makes it all reliable. Token cost optimization is built in from day one - not an afterthought.",
    deliverables: [
      "Custom RAG pipeline architecture",
      "LLM evaluation & monitoring framework",
      "Prompt engineering & optimization",
      "Token cost reduction strategies",
      "Production deployment with fallbacks",
    ],
    useCase:
      "PakLawAssist needed contract drafting and review grounded in Pakistan's legal framework - not generic LLM output. We built a RAG-first pipeline that retrieves local legal context before generating anything. The system now handles contract drafting, risk spotting, and compliance guidance. It's live with two Pakistan government departments: SMEDA and PSIC.",
  },
  {
    icon: Layers,
    title: "SaaS MVP Development",
    description:
      "We've seen what happens when teams rush to MVP without thinking about architecture. Six months later they're rewriting the database schema, the auth layer, the API contracts - everything. We build MVPs the right way from the start. Database design that won't become a bottleneck. APIs that your frontend and mobile teams can build against confidently. Auth that actually works at scale. A codebase your next engineer can onboard into without a week of archaeology.",
    deliverables: [
      "Full-stack SaaS application",
      "Database schema & migration strategy",
      "API design & documentation",
      "Authentication & role-based access",
      "CI/CD pipeline & deployment",
    ],
    useCase:
      "Senteez needed a full feedback intelligence platform - not just a dashboard. We built the entire pipeline: multi-source review ingestion, NLP analysis with fine-tuned models, topic modeling, entity extraction, and structured insight reports. It processes thousands of reviews at a time and the outputs are used for real business decisions.",
  },
  {
    icon: Server,
    title: "Scalable Backend Systems",
    description:
      "High-performance infrastructure built for the traffic you'll have - not just the traffic you have now. We design queue systems, microservices, and cloud-native architectures that scale with demand and recover gracefully when things go wrong. The boring-but-critical stuff - logging, monitoring, alerting, failover - is built in from day one, not bolted on after the first outage.",
    deliverables: [
      "Microservice architecture design",
      "Queue & event-driven systems",
      "Cloud infrastructure (AWS/GCP)",
      "Monitoring, logging & alerting",
      "Performance optimization & load testing",
    ],
    useCase:
      "A logistics company's monolithic backend was crashing under peak load. We redesigned it as an event-driven microservice architecture that handles 10x the original traffic with 99.9% uptime.",
  },
  {
    icon: Zap,
    title: "AI Automation Platforms",
    description:
      "The difference between an automation and an AI automation is what happens when something unexpected comes in. Rule-based systems break. Ours don't - because we build agents that understand context, handle edge cases, and escalate to a human when confidence is low. Every automation includes a monitoring dashboard so you always know what's running, what's failing, and why.",
    deliverables: [
      "Custom AI agent workflows",
      "Document processing pipelines",
      "Business rule engines",
      "Human-in-the-loop escalation",
      "Monitoring & performance dashboards",
    ],
    useCase:
      "Doctors at partner clinics were spending a significant portion of every consultation on documentation - typing notes, typing summaries, typing when they should be treating. We built NurMed's AI documentation system to handle that. In the first week after deployment at Avenue Broadwalk General Practice, average consultation time dropped from 44 to 29 minutes.",
  },
  {
    icon: Database,
    title: "Data-Driven Systems",
    description:
      "Data only creates value when it's somewhere useful, in a form someone can act on. We build pipelines that collect, transform, and deliver data reliably. Warehouses optimized for the queries your team actually runs. Analytics layers that surface insights without requiring a data science degree. And dashboards that tell you what's happening right now - not what happened last Tuesday.",
    deliverables: [
      "ETL/ELT pipeline architecture",
      "Data warehouse design & optimization",
      "Real-time analytics dashboards",
      "Data quality & validation framework",
      "Automated reporting systems",
    ],
    useCase:
      "Senteez aggregates reviews from Google Business, Facebook, TripAdvisor, BestBuy, and more - normalizing them into a single structured format for NLP analysis. The pipeline processes thousands of reviews per report, runs topic modeling and entity extraction, and outputs structured intelligence.",
  },
  {
    icon: Shield,
    title: "Architecture Consulting",
    description:
      "Already have a system? We audit, redesign, and roadmap scalable architectures. We identify bottlenecks before they become outages, technical debt that's quietly slowing your team down, and architectural decisions that will hurt you at scale. Our consulting engagements deliver actionable recommendations with a clear implementation order. Not a 100-page document. Not a presentation. A roadmap your team can actually execute.",
    deliverables: [
      "System architecture audit report",
      "Bottleneck identification & prioritization",
      "Scalability roadmap with milestones",
      "Technology stack recommendations",
      "Implementation guidance & team workshops",
    ],
    useCase:
      "A Series A startup's system was experiencing increasing latency and developer frustration. Our audit identified 5 critical bottlenecks. After implementing the top 3 recommendations, response times dropped 80% and deployment frequency doubled.",
  },
];

const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery Workshop",
    description:
      "We get into your systems, your constraints, and your actual goals before a single line of code is written. We define what success looks like so we're building the right thing.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Architecture & Design",
    description:
      "We design the system, pick the right stack, and map every data flow. You see the full blueprint before we build. No surprises mid-project.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Build, Deploy & Measure",
    description:
      "We ship to production, monitor real-world performance, and iterate. You get a system that works - not a handoff document and good luck.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SideGradients />
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="relative z-10 container-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="max-w-[700px] mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-display text-quishub-black font-semibold tracking-[-0.05em] leading-[1.05]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              We build AI systems<br />that work in the real world.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-6 text-lg text-quishub-muted leading-relaxed"
            >
              Every service we offer ends the same way: a system running in
              production, doing what it was built to do.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Infinity Transition Gradient */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-40 md:h-56 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, rgb(var(--quishub-surface-rgb)))' }}
        />
      </section>

      {/* Expanded Services */}
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <section
            key={service.title}
            className={`${i % 2 === 0 ? "section-light" : "section-white"} section-padding`}
          >
            <div className="container-content">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                className="group max-w-[900px] mx-auto p-8 transition-all duration-300"
              >
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group flex items-center gap-4 mb-6"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[11px] transition-all duration-300 bg-[color-mix(in_oklab,var(--g1)_10%,var(--surface))] border border-[color-mix(in_oklab,var(--g1)_20%,var(--line))] text-brand-g1 group-hover:bg-gradient-to-br group-hover:from-brand-g1 group-hover:to-brand-g2 group-hover:text-white group-hover:-rotate-[4deg] group-hover:scale-105">
                    <Icon
                      size={22}
                      className="text-current"
                    />
                  </div>
                  <h2
                    className="font-semibold tracking-heading text-quishub-black transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#7c3aed] group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]"
                    style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                  >
                    {service.title}
                  </h2>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-base leading-body text-quishub-muted"
                >
                  {service.description}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div>
                    <h3
                      className="mb-4 text-sm font-semibold uppercase tracking-label-wide text-quishub-black"
                    >
                      Key Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-quishub-muted"
                        >
                          <span className="mt-0.5 text-quishub-black">-</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="surface-card rounded-card p-5">
                    <h3
                      className="mb-3 text-sm font-semibold uppercase tracking-label-wide text-quishub-black"
                    >
                      Example Use Case
                    </h3>
                    <p
                      className="text-sm leading-body text-quishub-muted"
                    >
                      {service.useCase}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Process */}
      <section className="section-dark section-padding">
        <div className="container-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
              <SectionLabel variant="dark">THE PROCESS</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-quishub-black font-semibold tracking-heading"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              How we work.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {processSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group relative rounded-card p-7 bg-surface border border-line shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  {/* Step Left Border Gradient */}
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-brand-g1 to-brand-g2 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                  
                  <span className="absolute right-5 top-4 select-none text-[56px] font-display font-medium tracking-[-0.05em] brand-gradient opacity-50 leading-none">
                    {step.num}
                  </span>
                  
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[11px] transition-all duration-300 bg-[color-mix(in_oklab,var(--g1)_10%,var(--surface))] border border-[color-mix(in_oklab,var(--g1)_20%,var(--line))] text-brand-g1 group-hover:bg-gradient-to-br group-hover:from-brand-g1 group-hover:to-brand-g2 group-hover:text-white group-hover:-rotate-[4deg] group-hover:scale-105">
                    <StepIcon size={20} className="text-current" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-quishub-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-quishub-muted leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}





