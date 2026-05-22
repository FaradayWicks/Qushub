"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MessageSquare, CheckCircle, Phone, CalendarDays } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import CalendarBooking from "@/components/ui/CalendarBooking";
import SideGradients from "@/components/ui/SideGradients";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const expectations = [
  { icon: CalendarDays, text: "Pick a time that works for you" },
  { icon: MessageSquare, text: "30-minute discovery call" },
  { icon: CheckCircle, text: "Honest technical assessment" },
  { icon: Phone, text: "No-obligation project scoping" },
];

const projectTypes = [
  "AI Integration",
  "SaaS MVP",
  "Backend System",
  "Automation",
  "Other",
];

const budgetRanges = [
  "Under $5k",
  "$5k–$15k",
  "$15k–$50k",
  "$50k+",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<"calendar" | "form">("calendar");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!formState.name.trim()) newErrors.name = true;
    if (!formState.email.trim() || !formState.email.includes("@"))
      newErrors.email = true;
    if (!formState.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const inputClasses =
    "field-surface w-full rounded-lg border px-4 py-3 text-sm text-quishub-black placeholder:text-quishub-faint transition-colors duration-200 focus:border-quishub-black focus:outline-none";

  return (
    <>
      <SideGradients />
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        
        {/* Content */}
        <div className="container-content relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="max-w-[680px] mx-auto text-center"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
              <SectionLabel variant="dark">GET IN TOUCH</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-display text-quishub-black font-semibold tracking-[-0.05em] leading-[1.05]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Let&apos;s talk about what you&apos;re building.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-6 text-lg text-quishub-muted leading-relaxed"
            >
              Book a free 30-minute discovery call. We&apos;ll assess your use case,
              tell you what&apos;s realistic, and give you a straight answer — no
              pitch, no pressure.
            </motion.p>

            {/* Contact details row */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="mailto:hello@quishub.com"
                className="surface-card flex items-center gap-3 rounded-xl px-5 py-3 transition-all duration-300 hover:shadow-md hover:border-[color-mix(in_oklab,var(--g1)_30%,var(--line))] group"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--g1)_10%,var(--surface))] border border-[color-mix(in_oklab,var(--g1)_20%,var(--line))] text-brand-g1 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-g1 group-hover:to-brand-g2 group-hover:text-white">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium text-quishub-black">hello@quishub.com</span>
              </a>
              <div className="surface-card flex items-center gap-3 rounded-xl px-5 py-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--g1)_10%,var(--surface))] border border-[color-mix(in_oklab,var(--g1)_20%,var(--line))] text-brand-g1">
                  <Clock size={18} />
                </div>
                <span className="text-sm font-medium text-quishub-black">Respond within 24 hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Infinity Transition Gradient */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-40 md:h-56 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, rgb(var(--quishub-surface-rgb)))' }}
        />
      </section>

      {/* Booking + Form */}
      <section className="section-light section-padding">
        <div className="container-content">
          {/* Tab switcher */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center mb-10"
          >
            <div className="surface-card inline-flex rounded-xl p-1.5 relative">
              <button
                onClick={() => setActiveTab("calendar")}
                className={`relative z-10 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  activeTab === "calendar"
                    ? "text-white"
                    : "text-quishub-muted hover:text-quishub-black"
                }`}
              >
                {activeTab === "calendar" && (
                  <motion.div
                    layoutId="contact-tab-indicator"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-g1 to-brand-g2 shadow-[0_4px_14px_rgba(236,72,153,0.3)] -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                Book a Call
              </button>
              <button
                onClick={() => setActiveTab("form")}
                className={`relative z-10 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  activeTab === "form"
                    ? "text-white"
                    : "text-quishub-muted hover:text-quishub-black"
                }`}
              >
                {activeTab === "form" && (
                  <motion.div
                    layoutId="contact-tab-indicator"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-g1 to-brand-g2 shadow-[0_4px_14px_rgba(236,72,153,0.3)] -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                Send a Message
              </button>
            </div>
          </motion.div>

          {activeTab === "calendar" && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_2.4fr] gap-10 items-start"
            >
              {/* Left: info panel */}
              <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
                <h2
                  className="gradient-text font-semibold tracking-heading"
                  style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
                >
                  Book a discovery call
                </h2>
                <p className="mt-3 text-sm text-quishub-muted leading-body">
                  Select a date and time that works for you. We&apos;ll send a
                  calendar invite with a meeting link immediately.
                </p>

                <ul className="mt-8 space-y-4">
                  {expectations.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.text}
                        className="flex items-center gap-3 text-sm text-quishub-muted"
                      >
                        <span
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "var(--surface-icon-bg)" }}
                        >
                          <Icon size={15} className="text-quishub-black" />
                        </span>
                        {item.text}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 surface-card rounded-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-label-wide text-quishub-muted mb-2">
                    Prefer email instead?
                  </p>
                  <a
                    href="mailto:hello@quishub.com"
                    className="text-sm text-quishub-black hover:opacity-70 transition-opacity duration-200"
                  >
                    hello@quishub.com
                  </a>
                </div>
              </motion.div>

              {/* Right: Custom calendar */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CalendarBooking />
              </motion.div>
            </motion.div>
          )}

          {activeTab === "form" && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-[960px] mx-auto"
            >
              {/* Left info */}
              <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
                <h2
                  className="gradient-text font-semibold tracking-heading"
                  style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
                >
                  Tell us about your project.
                </h2>
                <p className="mt-3 text-sm text-quishub-muted leading-body">
                  Prefer to write it out first? Fill in the details and we&apos;ll
                  get back to you within 24 hours with an honest assessment.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="mailto:hello@quishub.com"
                    className="surface-card flex items-center gap-3 rounded-xl px-5 py-3 transition-all duration-300 hover:shadow-sm hover:border-[color-mix(in_oklab,var(--g1)_30%,var(--line))] group"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--g1)_10%,var(--surface))] border border-[color-mix(in_oklab,var(--g1)_20%,var(--line))] text-brand-g1 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-g1 group-hover:to-brand-g2 group-hover:text-white">
                      <Mail size={18} />
                    </div>
                    <span className="text-sm font-medium text-quishub-black">hello@quishub.com</span>
                  </a>
                  <div className="surface-card flex items-center gap-3 rounded-xl px-5 py-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--g1)_10%,var(--surface))] border border-[color-mix(in_oklab,var(--g1)_20%,var(--line))] text-brand-g1">
                      <Clock size={18} />
                    </div>
                    <span className="text-sm font-medium text-quishub-black">We typically respond within 24 hours</span>
                  </div>
                </div>

                <div className="mt-10 surface-card rounded-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-label-wide text-quishub-muted mb-2">
                    Rather speak directly?
                  </p>
                  <button
                    onClick={() => setActiveTab("calendar")}
                    className="text-sm text-quishub-black hover:opacity-70 transition-opacity duration-200 cursor-pointer underline underline-offset-2"
                  >
                    Book a discovery call instead →
                  </button>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
                {submitted ? (
                  <div className="surface-card rounded-card p-10 text-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "var(--button-primary-bg)" }}
                    >
                      <CheckCircle size={24} className="text-quishub-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-quishub-black">
                      Message sent!
                    </h3>
                    <p className="mt-2 text-sm text-quishub-muted">
                      We&apos;ll review your project details and get back to you
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-quishub-muted mb-1.5">
                        Full Name <span className="text-quishub-black">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className={`${inputClasses} ${errors.name ? "border-red-500" : ""}`}
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-quishub-muted mb-1.5">
                        Email <span className="text-quishub-black">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className={`${inputClasses} ${errors.email ? "border-red-500" : ""}`}
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm text-quishub-muted mb-1.5">
                        Company <span className="text-quishub-faint">(optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Company name"
                        className={inputClasses}
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({ ...formState, company: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="projectType" className="block text-sm text-quishub-muted mb-1.5">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          className={`${inputClasses} cursor-pointer`}
                          value={formState.projectType}
                          onChange={(e) =>
                            setFormState({ ...formState, projectType: e.target.value })
                          }
                        >
                          <option value="" className="bg-quishub-light">Select type</option>
                          {projectTypes.map((t) => (
                            <option key={t} value={t} className="bg-quishub-light">{t}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm text-quishub-muted mb-1.5">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          className={`${inputClasses} cursor-pointer`}
                          value={formState.budget}
                          onChange={(e) =>
                            setFormState({ ...formState, budget: e.target.value })
                          }
                        >
                          <option value="" className="bg-quishub-light">Select range</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b} className="bg-quishub-light">{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-quishub-muted mb-1.5">
                        Message <span className="text-quishub-black">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project..."
                        className={`${inputClasses} resize-none ${errors.message ? "border-red-500" : ""}`}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
