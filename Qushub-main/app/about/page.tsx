"use client";
import GravityGridBackground from "@/components/GravityGridBackground";
import { FloatingPicturesBackground } from "@/components/FloatingPicturesBackground";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import CTA from "@/components/sections/CTA";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type TechItem = {
  name: string;
  logo?: string;
  emoji?: string;
};

const aboutMetrics = [
  { value: "2", numValue: 2, suffix: "", label: "Government deployments" },
  { value: "5+", numValue: 5, suffix: "+", label: "Live production systems" },
  { value: "5.0", numValue: 5, suffix: ".0", label: "Upwork rating" },
  { value: "4+", numValue: 4, suffix: "+", label: "Industries served" },
];

const values = [
  {
    title: "Quality",
    description:
      "We'd rather say no to a project than ship something we're not proud of. Every system we build has our name on it - and we build like it does.",
  },
  {
    title: "Scalability",
    description:
      "Every system is designed for what comes after launch, not just the MVP. We make architecture decisions on day one that save months of rework later.",
  },
  {
    title: "Honesty",
    description:
      "We tell you what's possible, what isn't, and what you actually need - even when that's not what you want to hear.",
  },
  {
    title: "Local presence, global standards",
    description:
      "We're based in Pakistan. We've built systems deployed with government institutions, healthcare providers, and international platforms.",
  },
];

const teamMembers = [
  {
    name: "Mujtaba Rehman",
    role: "Founder & CEO",
    initials: "MR",
    bio: "Leads product strategy, client relationships, and overall vision. Has overseen the delivery of production AI systems across healthcare, legal, logistics, and creative tech — including two government-deployed platforms.",
    linkedin: "https://www.linkedin.com/company/quishub/",
  },
  {
    name: "Uzair Hussan Pasha",
    role: "Co-Founder & CTO",
    initials: "UP",
    bio: "Drives engineering architecture and technical execution. Specializes in scalable AI pipelines, agentic systems, and distributed backend infrastructure. Ensures every system we ship is production-grade from day one.",
    linkedin: "https://www.linkedin.com/company/quishub/",
  },
];

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const techCategories = [
  {
    category: "AI & Agentic",
    items: [
      { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/412991" },
      { name: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic/c96442" },
      { name: "LlamaIndex", emoji: "🦙" },
      { name: "Groq", logo: "https://cdn.simpleicons.org/groq/F55036" },
      { name: "Cohere", logo: "https://cdn.simpleicons.org/cohere/39594D" },
    ] as TechItem[],
  },
  {
    category: "Vector & RAG",
    items: [
      { name: "Pinecone", logo: "https://cdn.simpleicons.org/pinecone/000000" },
      { name: "Weaviate", logo: "https://cdn.simpleicons.org/weaviate/00B7FF" },
      { name: "Qdrant", logo: "https://cdn.simpleicons.org/qdrant/DC244C" },
      { name: "pgvector", logo: devicon("postgresql") },
      { name: "Embeddings", emoji: "🧠" },
    ] as TechItem[],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", logo: devicon("python") },
      { name: "FastAPI", logo: devicon("fastapi") },
      { name: "Node.js", logo: devicon("nodejs") },
      { name: "Django", logo: devicon("django", "plain") },
      { name: "PostgreSQL", logo: devicon("postgresql") },
      { name: "Redis", logo: devicon("redis") },
      { name: "Celery", emoji: "🌿" },
      { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql/E10098" },
    ] as TechItem[],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", logo: devicon("react") },
      { name: "Next.js", logo: devicon("nextjs") },
      { name: "TypeScript", logo: devicon("typescript") },
      { name: "Tailwind", logo: devicon("tailwindcss") },
      { name: "Framer", logo: "https://cdn.simpleicons.org/framer/0055FF" },
    ] as TechItem[],
  },
  {
    category: "No Code / Automation",
    items: [
      { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71" },
      { name: "Make", logo: "https://cdn.simpleicons.org/make/6D00CC" },
      { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF4F00" },
      { name: "Retool", logo: "https://cdn.simpleicons.org/retool/3D3D3D" },
    ] as TechItem[],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", logo: devicon("docker") },
      { name: "Kubernetes", logo: devicon("kubernetes") },
      { name: "AWS", logo: devicon("amazonwebservices", "original-wordmark") },
      { name: "GCP", logo: devicon("googlecloud") },
      { name: "Actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Nginx", logo: devicon("nginx") },
    ] as TechItem[],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", logo: devicon("react") },
      { name: "Expo", logo: "https://cdn.simpleicons.org/expo/333333" },
    ] as TechItem[],
  },
];

function AnimatedMetric({
  numValue,
  suffix,
  inView,
}: {
  numValue: number;
  suffix: string;
  inView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => {
    if (numValue % 1 !== 0) return v.toFixed(1);
    return Math.round(v).toString();
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, numValue, {
        duration: 1.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, motionValue, numValue]);

  return (
    <span className="text-[40px] font-bold text-quishub-black">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
        <GravityGridBackground />
        <div className="relative z-10 container-content pointer-events-none">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="max-w-[700px] mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-quishub-black font-semibold tracking-hero leading-hero"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              We are Quishub.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-5 text-lg text-quishub-muted leading-body"
            >
              A small, senior team of engineers and AI specialists. The people
              you talk to are the people who build. We don&apos;t staff projects
              with juniors and we don&apos;t outsource the hard parts.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-light section-padding">
        <div className="container-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
              <SectionLabel variant="light">OUR PHILOSOPHY</SectionLabel>
              <h2
                className="text-quishub-black font-semibold tracking-heading"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                Engineering over aesthetics.
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-5"
            >
              <p className="text-quishub-muted leading-body">
                The best products are built on solid architecture, not pretty
                wireframes. Every decision we make is grounded in how the system
                performs under real conditions - not how it looks in a Figma
                file.
              </p>
              <p className="text-quishub-muted leading-body">
                We think deterministically about non-deterministic systems. AI is
                powerful. It also needs guardrails, evaluation layers, and
                fallback mechanisms. That&apos;s the engineering work most teams
                skip. It&apos;s where we thrive.
              </p>
              <p className="text-quishub-muted leading-body">
                We&apos;ve built and operated our own products - legal platforms,
                healthcare tools, and feedback intelligence systems. So when we
                build for you, we&apos;re not guessing what production looks like.
                We&apos;ve lived it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section ref={metricsRef} className="section-dark section-padding">
        <div className="container-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {aboutMetrics.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <AnimatedMetric
                  numValue={m.numValue}
                  suffix={m.suffix}
                  inView={metricsInView}
                />
                <p className="mt-2 text-sm text-quishub-muted">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-light section-padding">
        <div className="container-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }} className="text-center mb-14">
              <SectionLabel variant="light">OUR VALUES</SectionLabel>
              <h2
                className="text-quishub-black font-semibold tracking-heading"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                What we stand for.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <motion.article
                  key={v.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="surface-card rounded-card p-7"
                >
                  <h3 className="text-lg font-semibold text-quishub-black">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-quishub-muted leading-body">
                    {v.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-dark section-padding">
        <div className="container-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-14"
            >
              <SectionLabel variant="dark">THE TEAM</SectionLabel>
              <h2
                className="text-quishub-black font-semibold tracking-heading"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                The people behind the work.
              </h2>
              <p className="mt-4 text-quishub-muted leading-body max-w-[520px] mx-auto">
                Small team, no layers. You talk to the people who build.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[860px] mx-auto">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="surface-card rounded-feature p-8 flex flex-col gap-6"
                >
                  {/* Avatar + name row */}
                  <div className="flex items-center gap-5">
                    {/* Avatar placeholder — replace with next/image once photos are ready */}
                    <div
                      className="w-[72px] h-[72px] rounded-full flex-shrink-0 flex items-center justify-center text-quishub-light font-semibold text-xl select-none"
                      style={{ background: "var(--button-primary-bg)" }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-quishub-black leading-tight">
                        {member.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-quishub-muted font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-quishub-muted leading-body flex-1">
                    {member.bio}
                  </p>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-quishub-muted hover:text-quishub-black transition-colors duration-200"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    View on LinkedIn
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stack */}
      <section className="section-light section-padding">
        <div className="container-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="text-center"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
              <SectionLabel variant="light">OUR STACK</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-quishub-black font-semibold tracking-heading mb-14"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              The stack that powers our systems.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left"
            >
              {techCategories.map((cat) => (
                <div key={cat.category} className="surface-card rounded-card p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-label-wide text-quishub-muted mb-3">
                    {cat.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item.name}
                        className="surface-chip inline-flex items-center gap-2 rounded-lg px-3 py-1 text-xs text-quishub-muted"
                      >
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="h-3.5 w-3.5 object-contain"
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <span aria-hidden="true">{item.emoji ?? "◆"}</span>
                        )}
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
