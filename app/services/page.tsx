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
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    id: "intelligent-automation",
    icon: Brain,
    title: "Intelligent Automation",
    description:
      "Transform repetitive manual work into streamlined digital processes. We build smart systems that understand your business context, handle complex decisions automatically, and escalate to your team only when human judgment is needed. Every solution includes clear monitoring so you always know what's working and what needs attention.",
    deliverables: [
      "Custom workflow automation",
      "Quality assurance framework",
      "Smart document processing",
      "Cost reduction strategies",
      "Production-ready deployment",
    ],
    useCase:
      "PakLawAssist needed contract drafting and review grounded in Pakistan's legal framework. We built a smart system that retrieves local legal context and generates accurate, compliant documents. The platform now handles contract drafting, risk spotting, and compliance guidance for two Pakistan government departments.",
  },
  {
    id: "digital-product-launch",
    icon: Layers,
    title: "Digital Product Launch",
    description:
      "Go from concept to paying customers without the technical headaches. We build complete digital platforms the right way from day one—solid foundations that grow with your business, not against it. User management, secure access, billing systems, and reporting—all integrated and ready to scale.",
    deliverables: [
      "Complete digital platform",
      "Secure user management system",
      "Integrated billing & subscriptions",
      "Business analytics dashboard",
      "Zero-downtime deployment process",
    ],
    useCase:
      "Senteez needed a full customer feedback platform to transform thousands of reviews into actionable business insights. We built an end-to-end solution that aggregates feedback from multiple sources, analyzes patterns automatically, and delivers structured reports that drive real business decisions.",
  },
  {
    id: "enterprise-infrastructure",
    icon: Server,
    title: "Enterprise Infrastructure",
    description:
      "High-performance systems built for the growth you're planning—not just where you are today. We design resilient digital infrastructure that scales automatically with demand and keeps running smoothly even when traffic spikes. Critical safeguards like monitoring, alerts, and automatic recovery are built in from day one.",
    deliverables: [
      "Resilient system architecture",
      "Automated scaling solutions",
      "Secure cloud infrastructure",
      "24/7 monitoring & alerts",
      "Performance optimization",
    ],
    useCase:
      "A logistics company's system was crashing during peak hours, costing them customers and revenue. We redesigned their infrastructure to handle 10x the original traffic with 99.9% uptime—turning their biggest weakness into a competitive advantage.",
  },
  {
    id: "smart-workflow-solutions",
    icon: Zap,
    title: "Smart Workflow Solutions",
    description:
      "Most automation breaks when something unexpected happens. Our systems adapt—understanding context, handling edge cases, and knowing when to ask for human input. The result: workflows that keep running smoothly even when real-world complexity throws curveballs. Every solution includes a clear dashboard so you always know what's working.",
    deliverables: [
      "Adaptive workflow automation",
      "Smart document processing",
      "Business decision engines",
      "Human escalation protocols",
      "Performance monitoring dashboards",
    ],
    useCase:
      "Doctors at partner clinics were spending a third of every consultation on paperwork—typing notes and summaries when they should be treating patients. We built a smart documentation system that handles the busywork automatically. In the first week, average consultation time dropped from 44 to 29 minutes.",
  },
  {
    id: "business-intelligence",
    icon: Database,
    title: "Business Intelligence",
    description:
      "Raw data is worthless until it becomes actionable insight. We build systems that collect information from all your sources, transform it into clear answers, and deliver it where decisions get made. Smart dashboards show what's happening now—not last week. Reports that actually tell you what to do next.",
    deliverables: [
      "Unified data collection system",
      "Optimized analytics warehouse",
      "Real-time business dashboards",
      "Data quality assurance",
      "Automated insight reports",
    ],
    useCase:
      "Senteez pulls customer feedback from Google, Facebook, TripAdvisor, and more—transforming thousands of scattered reviews into unified business intelligence. The system identifies patterns automatically and delivers clear reports that guide product decisions and marketing strategy.",
  },
  {
    id: "strategic-advisory",
    icon: Shield,
    title: "Strategic Technology Advisory",
    description:
      "Already have a system that needs help? We audit your current setup, identify what's slowing you down, and create a clear roadmap to fix it. No overwhelming technical documents—just practical recommendations your team can execute, prioritized by business impact.",
    deliverables: [
      "Complete system audit & report",
      "Priority issue identification",
      "Clear implementation roadmap",
      "Technology investment guidance",
      "Team training & knowledge transfer",
    ],
    useCase:
      "A growing company's platform was getting slower and frustrating their developers. Our audit found 5 critical issues holding them back. After fixing just the top 3, system speed improved 80% and they could release updates twice as fast.",
  },
];

const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Strategy & Discovery",
    description:
      "We learn your business, your challenges, and what success looks like for you. Together we define clear goals and a practical roadmap before any work begins.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design & Planning",
    description:
      "We blueprint your complete solution and show you exactly what you'll get. You review and approve every detail before we start building—no surprises.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Build, Launch & Optimize",
    description:
      "We build your system, put it live, and keep improving based on real results. You get a working solution—not just a project handoff.",
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
              Intelligent digital infrastructure<br />built for operational scale.
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
            id={service.id}
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
      <Footer />
    </>
  );
}





