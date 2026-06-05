"use client";
import "./new-home.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/brand/Logo";
import SideGradients from "@/components/ui/SideGradients";

export default function NewHome() {
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Sync with existing global theme
    const currentTheme = document.documentElement.dataset.theme || "dark";
    setTheme(currentTheme);
    // Ensure density and accent are set correctly for the new design
    document.documentElement.setAttribute("data-accent", "warm");
    document.documentElement.setAttribute("data-density", "compact");
    document.querySelector(".hero")?.setAttribute("data-hero", "A");

    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));

    // count-up numbers
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        const target = parseFloat(el.getAttribute("data-count") || "0");
        const dur = 1400;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const cur = target * eased;
          el.textContent = (target >= 10 ? Math.round(cur).toString() : cur.toFixed(0));
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target.toString();
        };
        requestAnimationFrame(tick);
        countIO.unobserve(el);
      });
    }, { threshold: 0.4 });
    document.querySelectorAll("[data-count]").forEach(el => countIO.observe(el));

    // card hover glow (mouse-follow)
    document.querySelectorAll(".card, .pcard, .tcard, .step").forEach(card => {
      const c = card as HTMLElement;
      c.addEventListener("mousemove", (e: MouseEvent) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", (e.clientX - r.left) + "px");
        c.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });

    // subtle parallax on hero blobs
    const mesh = document.querySelector(".hero__mesh");
    if (mesh) {
      const b1 = mesh.querySelector(".blob--1") as HTMLElement;
      const b2 = mesh.querySelector(".blob--2") as HTMLElement;
      window.addEventListener("scroll", () => {
        const y = window.scrollY;
        if (y > 800) return;
        if (b1) b1.style.transform = `translate3d(0, ${y * .1}px, 0)`;
        if (b2) b2.style.transform = `translate3d(0, ${y * .06}px, 0)`;
      }, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      countIO.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("quishub-theme", newTheme);
  };

  return (
    <div className="new-home-wrapper">
      {/* The original Navbar is now used globally */}

      {/* ================= HERO ================= */}
      <section className="hero" id="top" data-hero="A">
        <SideGradients />
        <div className="hero__mesh" aria-hidden="true">
          <div className="grid-overlay"></div>
        </div>

        <div className="hero__inner hero__inner--split">
          <div className="hero__copy">
            <div className="eyebrow reveal">
              <span className="dot dot--live"></span>
              <span>Enterprise Software Solutions · Results That Matter</span>
            </div>
            <h1 className="hero__h1">
              <span className="reveal-word">Skip</span>{" "}
              <span className="reveal-word">the</span>{" "}
              <span className="reveal-word">experiments.</span>{" "}
              <span
                className="reveal-word"
                style={{
                  background: "var(--quishub-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Get real results.
              </span>
            </h1>
            <p className="hero__sub reveal" style={{ "--d": ".6s" } as React.CSSProperties}>
             We turn business goals into reliable digital platforms that cut manual work and boost profit from Day One.
            </p>
            <div className="hero__ctas reveal" style={{ "--d": ".75s" } as React.CSSProperties}>
              <Link className="btn btn--primary btn--lg" href="/contact"><span className="relative z-10 flex items-center gap-2" style={{ color: "white" }}>Book a discovery call <span className="btn__arrow text-white">→</span></span></Link>
              <Link className="btn btn--ghost btn--lg" href="/work">See our work</Link>
            </div>
            <div className="hero__proof reveal" style={{ "--d": ".9s" } as React.CSSProperties}>
              <div className="stars" aria-label="5.0 on Upwork">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
              </div>
              <span><strong>5.0</strong> on Upwork</span>
              <span className="sep">·</span>
              <span><strong>20,000+</strong> users shipped</span>
            </div>
          </div>

          <div className="hero__visual reveal" style={{ "--d": ".4s" } as React.CSSProperties}>
            <div className="panel panel--term">
              <div className="panel__chrome">
                <span className="dot dot--r"></span><span className="dot dot--y"></span><span className="dot dot--g"></span>
                <span className="panel__path">quishub · production.log</span>
                <span className="panel__live"><span className="live-dot"></span>live</span>
              </div>
              <div className="term">
                <div className="term__line"><span className="c-mute">$</span> <span className="c-fg">$ quishub deploy --service custom-workflow --env production</span></div>
                <div className="term__line"><span className="c-mute">[00:00]</span> building container <span className="c-ok">✓</span></div>
                <div className="term__line"><span className="c-mute">[00:02]</span> verification: system accuracy 99.6% · error rate 0.4% <span className="c-ok">✓</span></div>
                <div className="term__line"><span className="c-mute">[00:03]</span> token cost optimiser <span className="c-grad">-76%</span></div>
                <div className="term__line"><span className="c-mute">[00:04]</span> launching to secure production environment ... <span className="c-ok">✓</span></div>
                <div className="term__line"><span className="c-mute">[00:05]</span> <span className="c-grad">live @ api.nurmed.ai/v2</span></div>
                <div className="term__line term__line--caret"><span className="c-mute">$</span> <span className="caret"></span></div>
              </div>
              <div className="panel__meta">
                <div className="meta-cell">
                  <span className="meta-cell__k">RESPONSE SPEED</span>
                  <span className="meta-cell__v">142<span className="unit">ms</span></span>
                </div>
                <div className="meta-cell">
                  <span className="meta-cell__k">SYSTEM RELIABILITY</span>
                  <span className="meta-cell__v">99.98<span className="unit">%</span></span>
                </div>
                <div className="meta-cell">
                  <span className="meta-cell__k">OPERATIONAL SAVINGS</span>
                  <span className="meta-cell__v">76<span className="unit">%</span></span>
                </div>
              </div>
            </div>

            <div className="chip chip--float-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20 6 9 17l-5-5"/></svg>
              Eval harness: 1,284 tests passing
            </div>
            <div className="chip chip--float-2">
              <span className="chip__gradpill"></span>
              GPT-4.1 · Claude · Llama · on-prem
            </div>
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span>AI Integration</span><span className="bullet">◆</span>
            <span>Intelligent Automation</span><span className="bullet">◆</span>
            <span>SaaS MVPs</span><span className="bullet">◆</span>
            <span>Enterprise Platforms</span><span className="bullet">◆</span>
            <span>Quality Assurance</span><span className="bullet">◆</span>
            <span>Workflow Optimization</span><span className="bullet">◆</span>
            <span>Cost Efficiency</span><span className="bullet">◆</span>
            <span>Performance Monitoring</span><span className="bullet">◆</span>
            <span>Business Intelligence</span><span className="bullet">◆</span>
            <span>Strategic Advisory</span><span className="bullet">◆</span>
            <span>AI Integration</span><span className="bullet">◆</span>
            <span>Intelligent Automation</span><span className="bullet">◆</span>
            <span>SaaS MVPs</span><span className="bullet">◆</span>
            <span>Enterprise Platforms</span><span className="bullet">◆</span>
            <span>Quality Assurance</span><span className="bullet">◆</span>
            <span>Workflow Optimization</span><span className="bullet">◆</span>
            <span>Cost Efficiency</span><span className="bullet">◆</span>
            <span>Performance Monitoring</span><span className="bullet">◆</span>
            <span>Business Intelligence</span><span className="bullet">◆</span>
            <span>Strategic Advisory</span><span className="bullet">◆</span>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section" id="services">
        <div className="container">
          <header className="section__head reveal">
            <span className="kicker">What we build</span>
            <h2 className="h2">Enterprise systems that drive real business results.</h2>
            <p className="lede">Six proven capabilities. One promise: reliable, scalable solutions that grow with your business.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group rounded-2xl p-[1px] bg-surface shadow-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]" style={{ background: "var(--surface-card-bg)", border: "1px solid var(--surface-card-border)" }}>
              <div className="h-full rounded-2xl p-6 bg-surface group-hover:bg-gradient-to-r group-hover:from-[#7c3aed]/10 group-hover:to-[#2563eb]/10 transition-all duration-300" style={{ background: "var(--surface-card-bg)" }}>
                <div className="mb-4 h-12 w-12 rounded-lg flex items-center justify-center p-3 text-ink bg-surface-2 border border-line-2 shadow-none group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:shadow-[0_0_20px_4px_rgba(124,58,237,0.5)] transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-quishub-black dark:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Intelligent Automation</h3>
                <p className="mb-4 text-sm text-slate-400">Deploy smart AI solutions that streamline operations, reduce costs, and deliver measurable ROI from day one.</p>
                <a className="inline-flex items-center gap-1 text-sm text-white hover:underline" href="/services#ai-llm-integration">Learn more <span>→</span></a>
              </div>
            </div>
            <div className="group rounded-2xl p-[1px] bg-surface shadow-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]" style={{ background: "var(--surface-card-bg)", border: "1px solid var(--surface-card-border)" }}>
              <div className="h-full rounded-2xl p-6 bg-surface group-hover:bg-gradient-to-r group-hover:from-[#7c3aed]/10 group-hover:to-[#2563eb]/10 transition-all duration-300" style={{ background: "var(--surface-card-bg)" }}>
                <div className="mb-4 h-12 w-12 rounded-lg flex items-center justify-center p-3 text-ink bg-surface-2 border border-line-2 shadow-none group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:shadow-[0_0_20px_4px_rgba(124,58,237,0.5)] transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 4v16"/></svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-quishub-black dark:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Digital Product Launch</h3>
                <p className="mb-4 text-sm text-slate-400">From concept to revenue in weeks. Complete platforms with user management, billing, and analytics built-in.</p>
                <a className="inline-flex items-center gap-1 text-sm text-white hover:underline" href="/services#saas-mvp-development">Learn more <span>→</span></a>
              </div>
            </div>
            <div className="group rounded-2xl p-[1px] bg-surface shadow-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]" style={{ background: "var(--surface-card-bg)", border: "1px solid var(--surface-card-border)" }}>
              <div className="h-full rounded-2xl p-6 bg-surface group-hover:bg-gradient-to-r group-hover:from-[#7c3aed]/10 group-hover:to-[#2563eb]/10 transition-all duration-300" style={{ background: "var(--surface-card-bg)" }}>
                <div className="mb-4 h-12 w-12 rounded-lg flex items-center justify-center p-3 text-ink bg-surface-2 border border-line-2 shadow-none group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:shadow-[0_0_20px_4px_rgba(124,58,237,0.5)] transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6a8 4 0 1 0 16 0A8 4 0 1 0 4 6v12a8 4 0 0 0 16 0V6"/><path d="M4 12a8 4 0 0 0 16 0"/></svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-quishub-black dark:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Enterprise Infrastructure</h3>
                <p className="mb-4 text-sm text-slate-400">Lightning-fast, ultra-secure systems designed to handle millions of users without breaking a sweat.</p>
                <a className="inline-flex items-center gap-1 text-sm text-white hover:underline" href="/services#scalable-backend-systems">Learn more <span>→</span></a>
              </div>
            </div>
            <div className="group rounded-2xl p-[1px] bg-surface shadow-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]" style={{ background: "var(--surface-card-bg)", border: "1px solid var(--surface-card-border)" }}>
              <div className="h-full rounded-2xl p-6 bg-surface group-hover:bg-gradient-to-r group-hover:from-[#7c3aed]/10 group-hover:to-[#2563eb]/10 transition-all duration-300" style={{ background: "var(--surface-card-bg)" }}>
                <div className="mb-4 h-12 w-12 rounded-lg flex items-center justify-center p-3 text-ink bg-surface-2 border border-line-2 shadow-none group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:shadow-[0_0_20px_4px_rgba(124,58,237,0.5)] transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-quishub-black dark:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Smart Workflow Solutions</h3>
                <p className="mb-4 text-sm text-slate-400">End-to-end workflow solutions that eliminate repetitive tasks, reduce errors, and free your team to focus on growth.</p>
                <a className="inline-flex items-center gap-1 text-sm text-white hover:underline" href="/services#ai-automation-platforms">Learn more <span>→</span></a>
              </div>
            </div>
            <div className="group rounded-2xl p-[1px] bg-surface shadow-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]" style={{ background: "var(--surface-card-bg)", border: "1px solid var(--surface-card-border)" }}>
              <div className="h-full rounded-2xl p-6 bg-surface group-hover:bg-gradient-to-r group-hover:from-[#7c3aed]/10 group-hover:to-[#2563eb]/10 transition-all duration-300" style={{ background: "var(--surface-card-bg)" }}>
                <div className="mb-4 h-12 w-12 rounded-lg flex items-center justify-center p-3 text-ink bg-surface-2 border border-line-2 shadow-none group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:shadow-[0_0_20px_4px_rgba(124,58,237,0.5)] transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 20V10M9 20V4M15 20v-8M21 20V6"/></svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-quishub-black dark:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Business Intelligence</h3>
                <p className="mb-4 text-sm text-slate-400">Transform raw data into actionable insights. Make confident decisions with real-time dashboards and predictive analytics.</p>
                <a className="inline-flex items-center gap-1 text-sm text-white hover:underline" href="/services#data-driven-systems">Learn more <span>→</span></a>
              </div>
            </div>
            <div className="group rounded-2xl p-[1px] bg-surface shadow-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]" style={{ background: "var(--surface-card-bg)", border: "1px solid var(--surface-card-border)" }}>
              <div className="h-full rounded-2xl p-6 bg-surface group-hover:bg-gradient-to-r group-hover:from-[#7c3aed]/10 group-hover:to-[#2563eb]/10 transition-all duration-300" style={{ background: "var(--surface-card-bg)" }}>
                <div className="mb-4 h-12 w-12 rounded-lg flex items-center justify-center p-3 text-ink bg-surface-2 border border-line-2 shadow-none group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:shadow-[0_0_20px_4px_rgba(124,58,237,0.5)] transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-quishub-black dark:text-white group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Strategic Technology Advisory</h3>
                <p className="mb-4 text-sm text-slate-400">Expert guidance on technology investments, system optimization, and digital transformation—without the technical jargon.</p>
                <a className="inline-flex items-center gap-1 text-sm text-white hover:underline" href="/services#architecture-consulting">Learn more <span>→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOGO STRIP ================= */}
      <section className="strip" aria-label="Trusted by">
        <div className="container strip__inner">
          <span className="strip__label">Teams shipping with Quishub</span>
          <div className="strip__track">
            <div className="strip__logos">
              <span className="wlogo">NurMed</span>
              <span className="wlogo">PakLawAssist</span>
              <span className="wlogo">Senteez</span>
              <span className="wlogo">Nuworo</span>
              <span className="wlogo">FictionPub<span className="ai">.ai</span></span>
              <span className="wlogo">Avenue Broadwalk</span>
            </div>
            <div className="strip__logos" aria-hidden="true">
              <span className="wlogo">NurMed</span>
              <span className="wlogo">PakLawAssist</span>
              <span className="wlogo">Senteez</span>
              <span className="wlogo">Nuworo</span>
              <span className="wlogo">FictionPub<span className="ai">.ai</span></span>
              <span className="wlogo">Avenue Broadwalk</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section section--alt" id="process">
        <div className="container">
          <header className="section__head reveal">
            <span className="kicker">The process</span>
            <h2 className="h2">From vision to value. Transparent every step of the way.</h2>
          </header>

          <ol className="steps">
            <li className="step reveal">
              <div className="step__num">01</div>
              <div className="step__body">
                <h3 className="step__h">Strategy &amp; Planning</h3>
                <p className="step__p">A focused working session to understand your business goals, challenges, and success metrics. You receive a clear roadmap with deliverables, timelines, and investment—no surprises.</p>
                <ul className="step__list">
                  <li>Business goal alignment</li><li>Solution architecture</li><li>Success metrics defined</li><li>Detailed project scope</li>
                </ul>
              </div>
            </li>
            <li className="step reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
              <div className="step__num">02</div>
              <div className="step__body">
                <h3 className="step__h">Design &amp; Architecture</h3>
                <p className="step__p">We blueprint your complete solution before building—minimizing risk and ensuring the final product aligns perfectly with your business needs and budget.</p>
                <ul className="step__list">
                  <li>Technical blueprinting</li><li>User experience design</li><li>Investment planning</li><li>Performance targets</li>
                </ul>
              </div>
            </li>
            <li className="step reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
              <div className="step__num">03</div>
              <div className="step__body">
                <h3 className="step__h">Build, Launch &amp; Optimize</h3>
                <p className="step__p">Rapid development with weekly progress updates. Quality assurance and cost management are built in from day one—so you see results before you invest further.</p>
                <ul className="step__list">
                  <li>Weekly progress updates</li><li>Quality assurance</li><li>Performance monitoring</li><li>Cost optimization</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ================= CASE STUDY ================= */}
      <section className="section" id="case">
        <div className="container">
          <header className="section__head reveal">
            <span className="kicker">Success story · Healthcare · Kenya</span>
            <h2 className="h2">How NurMed cut clinical consultation time by <span className="grad">34%</span> in the first week.</h2>
          </header>

          <div className="case">
            <div className="case__stats reveal">
              <div className="stat">
                <div className="stat__v"><span data-count="34">0</span>%</div>
                <div className="stat__k">Drop in consultation time</div>
              </div>
              <div className="stat">
                <div className="stat__v"><span data-count="15">0</span> min</div>
                <div className="stat__k">TAT improvement, Week 1</div>
              </div>
              <div className="stat">
                <div className="stat__v"><span data-count="1">0</span> wk</div>
                <div className="stat__k">Time to measurable impact</div>
              </div>
              <div className="stat">
                <div className="stat__v"><span data-count="0">0</span></div>
                <div className="stat__k">Extra staff needed</div>
              </div>
            </div>

            <div className="case__body">
              <div className="case__visual reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
                <div className="panel panel--app">
                  <div className="panel__chrome">
                    <span className="dot dot--r"></span><span className="dot dot--y"></span><span className="dot dot--g"></span>
                    <span className="panel__path">nurmed.ai · consult #4821</span>
                  </div>
                  <div className="app">
                    <aside className="app__side">
                      <div className="app__brand flex items-center gap-2"><img src="/images/nurmed.png" alt="NurMed" className="w-6 h-6 object-contain" /> NurMed</div>
                      <nav className="app__nav">
                        <a className="app__item app__item--active">◐ Consultations</a>
                        <a className="app__item">◇ Patients</a>
                        <a className="app__item">◇ Prescriptions</a>
                        <a className="app__item">◇ Evaluations</a>
                        <a className="app__item">◇ Settings</a>
                      </nav>
                      <div className="app__pill">On-prem · HIPAA</div>
                    </aside>
                    <main className="app__main">
                      <div className="app__row">
                        <div>
                          <div className="app__small">Consultation · Dr. Kariuki</div>
                          <div className="app__title">Patient #4821 — follow-up</div>
                        </div>
                        <div className="tag tag--grad">Draft SOAP ready</div>
                      </div>

                      <div className="app__cards">
                        <div className="appcard">
                          <span className="app__small">Consult duration</span>
                          <span className="app__big"><span data-count="11">0</span><i>:42</i></span>
                          <span className="app__delta down">↓ 34% vs baseline</span>
                        </div>
                        <div className="appcard">
                          <span className="app__small">Grounded citations</span>
                          <span className="app__big"><span data-count="12">0</span></span>
                          <span className="app__delta">from the chart</span>
                        </div>
                        <div className="appcard">
                          <span className="app__small">Hallucination rate</span>
                          <span className="app__big">0.4<i>%</i></span>
                          <span className="app__delta down">monitored live</span>
                        </div>
                      </div>

                      <div className="app__note">
                        <div className="app__small">Draft SOAP — generated 3s ago</div>
                        <p><span className="c-mute">S:</span> 58yo F, known T2DM, c/o fatigue ×2wks, stable BP …</p>
                        <p><span className="c-mute">O:</span> HbA1c 8.2 (up from 7.6), BMI 28.4, exam unremarkable.</p>
                        <p><span className="c-mute">A:</span> Suboptimal glycaemic control — likely adherence.</p>
                        <p><span className="c-mute">P:</span> Metformin 1g BID, dietitian referral, 6-wk review.</p>
                      </div>
                    </main>
                  </div>
                </div>
              </div>

              <aside className="case__quote reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
                <svg className="quote-mark" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h4v4H7v6H3V9a2 2 0 0 1 2-2h2zm10 0h4v4h-4v6h-4V9a2 2 0 0 1 2-2h2z"/></svg>
                <blockquote>
                  Quishub shipped a production system in a month. By week one, our doctors were
                  closing consults 34% faster — with cleaner documentation and fewer errors. They
                  behaved like an internal team, not a vendor.
                </blockquote>
                <div className="case__by">
                  <img src="/images/Head%20Of%20Product.jpg" alt="Head of Product - Avenue Broadwalk" className="h-12 w-12 rounded-full object-cover border border-[#1e293b]" />
                  <div>
                    <div className="case__name">Head of Product</div>
                    <div className="case__org">Avenue Broadwalk · NurMed</div>
                  </div>
                </div>
                <a className="btn btn--ghost" href="#">Read the full story <span className="btn__arrow">→</span></a>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="section section--alt" id="portfolio">
        <div className="container">
          <header className="section__head reveal">
            <span className="kicker">What we&apos;ve built for ourselves</span>
            <h2 className="h2">Five products. All live. All paying rent.</h2>
            <p className="lede">We eat our own cooking. Every bet we place on a client stack, we&apos;ve placed on ourselves first.</p>
          </header>

          <div className="portfolio">
            <a className="pcard pcard--lg reveal" href="https://fictionpub.ai" target="_blank" rel="noopener noreferrer">
              <div className="pcard__tag">Consumer AI · 20K+ users</div>
              <h3 className="pcard__h">FictionPub<span className="grad">.ai</span></h3>
              <p className="pcard__p">AI-assisted novel writing with chapter-level memory, style locks and token-efficient RAG. 20,000+ writers onboarded, 2.4M chapters generated.</p>
              <div className="pcard__metric"><strong>20,000+</strong> writers</div>
              <div className="pcard__img" data-label="Product shot · FictionPub editor">
                <img src="/images/fictionpub-ai.jpg" alt="FictionPub.ai editor" className="w-full h-full object-cover" />
              </div>
            </a>

            <a className="pcard reveal" href="https://paklawassist.com" target="_blank" rel="noopener noreferrer" style={{ "--d": ".1s" } as React.CSSProperties}>
              <div className="pcard__tag">LegalTech</div>
              <h3 className="pcard__h">PakLawAssist</h3>
              <p className="pcard__p">Grounded legal research for Pakistan&apos;s case law corpus.</p>
              <div className="pcard__metric"><strong>1.2M</strong> judgments indexed</div>
              <div className="pcard__img" data-label="Platform preview">
                <img src="/images/paklawassist.jpg" alt="PakLawAssist" className="w-full h-full object-cover" />
              </div>
            </a>

            <a className="pcard reveal" href="https://senteez.com" target="_blank" rel="noopener noreferrer" style={{ "--d": ".15s" } as React.CSSProperties}>
              <div className="pcard__tag">Feedback intelligence</div>
              <h3 className="pcard__h">Senteez</h3>
              <p className="pcard__p">Turns qualitative user feedback into shippable decisions.</p>
              <div className="pcard__metric"><strong>92%</strong> theme accuracy</div>
              <div className="pcard__img" data-label="Analytics dashboard">
                <img src="/images/senteez.jpg" alt="Senteez" className="w-full h-full object-cover" />
              </div>
            </a>

            <a className="pcard reveal" href="https://nurmed.ai" target="_blank" rel="noopener noreferrer" style={{ "--d": ".2s" } as React.CSSProperties}>
              <div className="pcard__tag">Healthcare</div>
              <h3 className="pcard__h">NurMed</h3>
              <p className="pcard__p">Clinical documentation that cuts consult time by a third.</p>
              <div className="pcard__metric"><strong>34%</strong> faster consults</div>
              <div className="pcard__img" data-label="Clinical interface">
                <img src="/images/nurmed-ai.jpg" alt="NurMed" className="w-full h-full object-cover" />
              </div>
            </a>

            <a className="pcard reveal" href="https://nuworo.com" target="_blank" rel="noopener noreferrer" style={{ "--d": ".25s" } as React.CSSProperties}>
              <div className="pcard__tag">International legal AI</div>
              <h3 className="pcard__h">Nuworo</h3>
              <p className="pcard__p">Cross-jurisdiction contract analysis for in-house counsel.</p>
              <div className="pcard__metric"><strong>14</strong> jurisdictions</div>
              <div className="pcard__img" data-label="Global contract audit">
                <img src="/images/Nuworo.jpg" alt="Nuworo" className="w-full h-full object-cover" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY US / COMPARISON ================= */}
      {/* <section className="section" id="why">
        <div className="container">
          <header className="section__head reveal">
            <span className="kicker">Why us</span>
            <h2 className="h2">Built different. By design.</h2>
            <p className="lede">Not every agency thinks about production on day one. We start there.</p>
          </header>

          <div className="cmp reveal">
            <div className="cmp__head">
              <div></div>
              <div className="cmp__us">
                <img
                  src="/images/Qushub%20Logo.png"
                  alt="Quishub"
                  className="cmp__logo"
                />
                <span>Quishub</span>
              </div>
              <div className="cmp__them">Typical agency</div>
            </div>

            <div className="cmp__row">
              <div className="cmp__k">Ships to production</div>
              <div className="cmp__v cmp__v--yes">Always</div>
              <div className="cmp__v cmp__v--no">Sometimes</div>
            </div>
            <div className="cmp__row">
              <div className="cmp__k">AI output evaluation</div>
              <div className="cmp__v cmp__v--yes">Built-in, CI-gated</div>
              <div className="cmp__v cmp__v--no">None</div>
            </div>
            <div className="cmp__row">
              <div className="cmp__k">Architecture-first</div>
              <div className="cmp__v cmp__v--yes">Before code</div>
              <div className="cmp__v cmp__v--no">Mid-build, if at all</div>
            </div>
            <div className="cmp__row">
              <div className="cmp__k">Scalable from day one</div>
              <div className="cmp__v cmp__v--yes">Yes</div>
              <div className="cmp__v cmp__v--no">Rebuild at scale</div>
            </div>
            <div className="cmp__row">
              <div className="cmp__k">Transparency</div>
              <div className="cmp__v cmp__v--yes">Repo, dashboards, invoices</div>
              <div className="cmp__v cmp__v--no">Status decks</div>
            </div>
            <div className="cmp__row">
              <div className="cmp__k">Cost Efficiency</div>
              <div className="cmp__v cmp__v--yes"><span className="grad">75%+ savings</span></div>
              <div className="cmp__v cmp__v--no">Not considered</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= TESTIMONIALS ================= */}
      <section className="section section--alt" id="stories">
        <div className="container">
          <header className="section__head reveal">
            <span className="kicker">Client stories</span>
            <h2 className="h2">The best reviews come with a deploy URL.</h2>
          </header>

          <div className="grid grid--3">
            <figure className="tcard reveal">
              <blockquote>Shipped a HIPAA-aware clinical assistant in under a month. Our consult times dropped 34% in week one.</blockquote>
              <figcaption className="tcard__by">
                <img src="/images/Head%20Of%20Product.jpg" alt="Head of Product - Avenue Broadwalk" className="h-12 w-12 rounded-full object-cover border border-[#1e293b]" />
                <div>
                  <div className="tcard__name">Head of Product</div>
                  <div className="tcard__org">Avenue Broadwalk · <em>NurMed</em></div>
                </div>
              </figcaption>
            </figure>
            <figure className="tcard reveal" style={{ "--d": ".1s" } as React.CSSProperties}>
              <blockquote>They rebuilt our PWA in two sprints and found $14k/mo of cloud we didn&apos;t know we were burning.</blockquote>
              <figcaption className="tcard__by">
                <img src="/images/Founder.jpg" alt="Founder" className="h-12 w-12 rounded-full object-cover border border-[#1e293b]" />
                <div>
                  <div className="tcard__name">Founder</div>
                  <div className="tcard__org">Upwork · Full-stack PWA</div>
                </div>
              </figcaption>
            </figure>
            <figure className="tcard reveal" style={{ "--d": ".2s" } as React.CSSProperties}>
              <blockquote>Senior engineers who actually read the whitepaper. Delivered the on-chain workflow we&apos;d been stuck on for months.</blockquote>
              <figcaption className="tcard__by">
<img src="/images/CTO.jpg" alt="CTO - Upwork Blockchain" className="h-12 w-12 rounded-full object-cover border border-[#1e293b]" />                <div>
                  <div className="tcard__name">CTO</div>
                  <div className="tcard__org">Upwork · Blockchain</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section" id="faq">
        <div className="container container--narrow">
          <header className="section__head reveal">
            <span className="kicker">FAQ</span>
            <h2 className="h2">Good questions. Straight answers.</h2>
          </header>

          <div className="faq">
            <details className="faq__item reveal">
              <summary>
                <span>What industries do you work in?</span>
                <span className="faq__plus"></span>
              </summary>
              <div className="faq__body">
                Healthcare, legal, fintech, education, creator tools and developer infra — anywhere AI needs to ship with evals and accountability. We turn down work we can&apos;t make work.
              </div>
            </details>
            <details className="faq__item reveal">
              <summary><span>How long does a typical project take?</span><span className="faq__plus"></span></summary>
              <div className="faq__body">Discovery to measurable impact is usually 2–6 weeks. Larger platforms scope in phases. We share a weekly shipping cadence from day one.</div>
            </details>
            <details className="faq__item reveal">
              <summary><span>Do you work on existing codebases?</span><span className="faq__plus"></span></summary>
              <div className="faq__body">Often. We audit, stabilise, then extend. Expect a readable architecture diagram and a prioritised remediation plan in week one.</div>
            </details>
            <details className="faq__item reveal">
              <summary><span>What makes you different?</span><span className="faq__plus"></span></summary>
              <div className="faq__body">We ship. Evals are in CI. Token cost is measured. Performance Monitoring is day one. And we&apos;ll say no to work we can&apos;t deliver on — in writing.</div>
            </details>
            <details className="faq__item reveal">
              <summary><span>Minimum project size?</span><span className="faq__plus"></span></summary>
              <div className="faq__body">Our smallest engagement is a two-week architecture sprint. Anything below that, we&apos;ll point you to a better-fit partner.</div>
            </details>
            <details className="faq__item reveal">
              <summary><span>Ongoing support?</span><span className="faq__plus"></span></summary>
              <div className="faq__body">Yes — retainers cover on-call, eval drift, model upgrades, cost tuning and a monthly architecture review.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="cta" id="contact">
        <div className="cta__bg" aria-hidden="true">
          <div className="blob blob--1"></div>
          <div className="blob blob--2"></div>
          <div className="grid-overlay"></div>
        </div>
        <div className="container cta__inner reveal">
          <h2 className="cta__h">Ready to build something that <span className="grad">actually works</span>?</h2>
          <p className="cta__p">
            Book a free 30-minute call. We&apos;ll look at your use case, tell you what&apos;s actually possible,
            and give you a straight answer — whether that means working with us or not.
          </p>
          <div className="cta__ctas">
            <Link className="btn btn--primary btn--lg" href="/contact"><span className="relative z-10 flex items-center gap-2" style={{ color: "white" }}>Book a discovery call <span className="btn__arrow text-white">→</span></span></Link>
            <a className="btn btn--ghost btn--lg" href="mailto:hello@quishub.com">hello@quishub.com</a>
          </div>
          <p className="cta__fine">No sales pitch. No commitment. Just honest engineering advice.</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="foot">
        <div className="container foot__inner">
          <div className="foot__brandcol">
            <a className="nav__brand" href="#top">
              <Logo width={112} className="block h-7 w-auto" />
            </a>
            <p className="foot__blurb">Enterprise AI solutions that deliver measurable business results. Built for growth. Designed for impact.</p>
          </div>
          <div className="foot__col">
            <div className="foot__h">Services</div>
            <Link href="/services#intelligent-automation">Intelligent Automation</Link>
            <Link href="/services#digital-product-launch">Digital Product Launch</Link>
            <Link href="/services#enterprise-infrastructure">Enterprise Infrastructure</Link>
            <Link href="/services#smart-workflow-solutions">Smart Workflow Solutions</Link>
            <Link href="/services#business-intelligence">Business Intelligence</Link>
            <Link href="/services#strategic-technology-advisory">Strategic Technology Advisory</Link>
          </div>
          <div className="foot__col">
            <div className="foot__h">Company</div>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="foot__col">
            <div className="foot__h">Contact</div>
            <a href="mailto:hello@quishub.com">hello@quishub.com</a>
            <Link className="btn btn--primary btn--sm" href="/contact" style={{ marginTop: "12px", color: "white" }}>
              <span className="relative z-10 flex items-center gap-2" style={{ color: "white" }}>Book a call <span className="btn__arrow text-white">→</span></span>
            </Link>
          </div>
        </div>
        <div className="container foot__bottom">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span>© 2026 Quishub. All rights reserved.</span>
            <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
              <Link href="/privacy" className="hover:text-[#2152c4] hover:underline transition-colors">Privacy Policy</Link>
              <span className="text-slate-300">|</span>
              <Link href="/terms" className="hover:text-[#2152c4] hover:underline transition-colors">Terms & Conditions</Link>
            </div>
          </div>
          <span className="foot__tag">Transforming ideas into enterprise success stories.</span>
        </div>
      </footer>
    </div>
  );
}



