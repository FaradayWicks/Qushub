"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import CTA from "@/components/sections/CTA";
import SideGradients from "@/components/ui/SideGradients";
import Footer from "@/components/layout/Footer";

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
  image: "/Mujtaba.jpg",
  bio: "Leads product strategy, client relationships, and overall vision. Has overseen the delivery of production software systems across healthcare, legal, logistics, and creative industries — including two government-deployed platforms.",
  linkedin: "https://www.linkedin.com/in/muhammad-mujtaba-rehman/",
},
  {
    name: "Uzair Hassan Pasha",
    role: "Co-Founder & CTO",
    initials: "UP",
    image: "/pasha.JPG",
    bio: "Drives engineering architecture and technical execution. Specializes in scalable automation systems, intelligent workflows, and resilient digital infrastructure. Ensures every system we ship is production-ready from day one.",
    linkedin: "https://www.linkedin.com/in/uzair-hussan-pasha-4481481a2/",
  },
  {
    name: "Mobashir Hussain",
    role: "Senior Software Engineer",
    initials: "MH",
    image: "/mobi.jpg",
    bio: "Architects scalable full-stack applications and high-performance backend systems. Specializes in building resilient software structures, API integrations, and maintaining production-level code quality.",
  },
  {
    name: "Sherdil Lodhi",
    role: "Technical Team Lead",
    initials: "SL",
    image: "/14819A12-A4A6-46CE-92DE-39CD0DC65ED8.jpg",
    bio: "Drives technical execution, team coordination, and engineering best practices. Oversees project delivery pipelines, sprint management, and ensures complex software architectures meet enterprise performance standards.",
  },
  {
    name: "Ahmad Riaz",
    role: "Associate Software Engineer / Designer",
    initials: "AR",
    image: "/Ahmad Riaz.png",
    bio: "Crafts intuitive UI/UX design systems and builds responsive, modern frontend interfaces. Combines design aesthetics with clean engineering code to deliver seamless user experiences.",
  },
  {
    name: "Muhammad Adil",
    role: "Associate Software Engineer",
    initials: "MA",
    image: "/Muhammad Adil.jpg",
    bio: "Specializes in modern web applications, frontend optimizations, and reliable backend integration flows. Focuses on shipping clean, efficient, and well-tested features.",
  },
];

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const stackAccents = [
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
];

const teamAccents = [
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
  "from-[#7c3aed] to-[#2563eb]",
];

const techCategories = [
  {
    category: "Intelligent Automation",
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
    category: "Smart Data Systems",
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
    <span className="text-[40px] font-bold font-body text-quishub-black">
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
      <SideGradients />
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
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
              className="font-display text-quishub-black font-semibold tracking-[-0.05em] leading-[1.05]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", paddingBottom: "0.1em" }}
            >
              We are Quishub.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-5 text-lg text-quishub-muted leading-body"
            >
              A lean team of senior digital architects and operational strategists.
              The people you talk to are the people who build. We don&apos;t staff projects
              with juniors and we don&apos;t outsource the critical work.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Infinity Transition Gradient */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-40 md:h-56 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, rgb(var(--quishub-surface-rgb)))' }}
        />
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
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }} className="group">
              <SectionLabel variant="light">OUR PHILOSOPHY</SectionLabel>
              <h2
                className="font-semibold tracking-heading text-quishub-black transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#7c3aed] group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                Reliability over everything.
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-5"
            >
              <p className="text-quishub-muted leading-body">
                The best business systems are built on solid foundations, not surface-level polish.
                Every decision we make is grounded in how your operations perform under real-world
                conditions—not how they look in a presentation.
              </p>
              <p className="text-quishub-muted leading-body">
                We build with precision and accountability. Smart automation is powerful, but it
                needs quality safeguards, clear evaluation standards, and fallback protocols.
                That&apos;s the disciplined work most teams skip. It&apos;s where we excel.
              </p>
              <p className="text-quishub-muted leading-body">
                We&apos;ve built and operated our own platforms across legal, healthcare,
                and customer feedback industries. So when we build for you, we&apos;re not
                guessing what production demands—we&apos;ve lived it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section ref={metricsRef} className="section-white section-padding">
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
                className="group"
              >
                <span className="inline-block transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#7c3aed] group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]">
                  <AnimatedMetric
                    numValue={m.numValue}
                    suffix={m.suffix}
                    inView={metricsInView}
                  />
                </span>
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
                  className="group rounded-card p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(124,58,237,0.3),0_0_40px_rgba(37,99,235,0.15)] hover:border-[rgba(124,58,237,0.25)]"
                  style={{
                    background: "var(--surface-card-bg)",
                    border: "1px solid var(--surface-card-border)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  <h3 className="text-lg font-semibold text-quishub-black transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]">
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
      <section className="section-white section-padding">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {teamMembers.slice(0, 2).map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group relative overflow-hidden bg-[#160e20]/70 backdrop-blur-xl border border-[var(--surface-card-border)] p-6 md:p-8 rounded-2xl shadow-[0_22px_60px_rgba(0,0,0,0.28)] ring-1 ring-[var(--surface-card-border)] flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--quishub-light-rgb)/0.2)] hover:shadow-[0_28px_72px_rgba(0,0,0,0.36)]"
                >
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${teamAccents[index]} opacity-90`} />
                  <div className={`absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${teamAccents[index]} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20`} />
                  {/* Avatar + name row */}
                  <div className="relative flex items-center gap-5">
                    {/* Avatar placeholder — replace with next/image once photos are ready */}
                                      {member.image ? (
                      <div className="w-24 h-24 rounded-full overflow-hidden relative mb-4 border-2 border-white/15 flex-shrink-0 shadow-[0_0_0_6px_rgba(255,255,255,0.035),0_16px_34px_rgba(0,0,0,0.28)]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="96px"
                          className="object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center text-quishub-light font-semibold text-xl select-none mb-4 border-2 border-white/10"
                        style={{ background: "var(--button-primary-bg)" }}
                      >
                        {member.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="font-[var(--font-texar)] font-bold text-white text-xl leading-tight">
                        {member.name}
                      </h3>
                      <p className="mt-0.5 font-[var(--font-sora)] text-[#e5e5e4]/70 text-sm font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="relative font-[var(--font-sora)] text-[#e5e5e4]/80 text-sm mt-3 leading-relaxed flex-1">
                    {member.bio}
                  </p>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 text-xs text-[#e5e5e4]/70 hover:text-white transition-colors duration-200"
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

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 text-center"
            >
              <span className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.24em] text-quishub-muted">
                Engineering Leadership
              </span>
            </motion.div>

            <div className="relative left-1/2 grid w-[calc(100vw-2rem)] max-w-[1360px] -translate-x-1/2 grid-cols-1 gap-6 md:w-[calc(100vw-4rem)] md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.slice(2).map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group relative overflow-hidden bg-[#160e20]/70 backdrop-blur-xl border border-[var(--surface-card-border)] p-6 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.24)] flex min-h-[392px] flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--quishub-light-rgb)/0.2)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.34)]"
                >
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${teamAccents[index + 2]} opacity-85`} />
                  <div className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${teamAccents[index + 2]} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20`} />
                  <div className="relative flex items-center gap-5 xl:gap-6">
                    {member.image ? (
                      <div className="w-24 h-24 rounded-full overflow-hidden relative mb-4 border-2 border-white/15 flex-shrink-0 shadow-[0_0_0_6px_rgba(255,255,255,0.03),0_14px_30px_rgba(0,0,0,0.24)]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="96px"
                          className="object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center text-quishub-light font-semibold text-xl select-none mb-4 border-2 border-white/10"
                        style={{ background: "var(--button-primary-bg)" }}
                      >
                        {member.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="font-[var(--font-texar)] font-bold text-white text-xl leading-tight">
                        {member.name}
                      </h3>
                      <p className="mt-0.5 font-[var(--font-sora)] text-[#e5e5e4]/70 text-sm font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="relative font-[var(--font-sora)] text-[#e5e5e4]/80 text-sm mt-3 leading-relaxed flex-1">
                    {member.bio}
                  </p>
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
              className="font-semibold tracking-heading mb-14 text-quishub-black"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              The stack that powers our systems.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 xl:grid-cols-12"
            >
              {techCategories.map((cat, index) => (
                <div
                  key={cat.category}
                  className={`group relative overflow-hidden rounded-2xl border border-[var(--surface-card-border)] bg-[#160e20]/70 shadow-[0_18px_44px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[rgb(var(--quishub-light-rgb)/0.2)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.32)] ${index < 2 ? "min-h-[232px] p-6 xl:col-span-6" : index < 5 ? "min-h-[190px] p-5 xl:col-span-4" : "min-h-[190px] p-5 xl:col-span-6"}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${stackAccents[index]} opacity-80`} />
                  <div className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${stackAccents[index]} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20`} />

                  <div className="relative mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h4 className={`text-xs font-semibold uppercase tracking-label-wide text-[#e5e5e4]/75 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${stackAccents[index]}`}>
                        {cat.category}
                      </h4>
                      <div className={`mt-2 h-1 w-10 rounded-full bg-gradient-to-r ${stackAccents[index]} opacity-80`} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-[var(--font-sora)] text-[10px] font-semibold text-[#e5e5e4]/60">
                      {cat.items.length} tools
                    </span>
                  </div>

                  <div className={`relative grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 ${index < 2 ? "md:grid-cols-3" : "sm:flex sm:flex-wrap"}`}>
                    {cat.items.map((item) => (
                      <span
                        key={item.name}
                        className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-[var(--font-sora)] text-xs font-semibold text-[#f7f2ea] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1] sm:justify-start"
                      >
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={item.name}
                            width={14}
                            height={14}
                            unoptimized
                            className="h-3.5 w-3.5 object-contain"
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
      <Footer />
    </>
  );
}
