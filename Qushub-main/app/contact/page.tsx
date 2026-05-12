"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MessageSquare, CheckCircle, Phone, CalendarDays } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import CalendarBooking from "@/components/ui/CalendarBooking";
import NexusGridBackground from "@/components/NexusGridBackground";

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
      {/* Hero */}
      <section className="section-dark pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <NexusGridBackground />
        
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
              className="text-quishub-black font-semibold tracking-hero leading-hero"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Let&apos;s talk about what you&apos;re building.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-5 text-lg text-quishub-muted leading-body"
            >
              Book a free 30-minute discovery call. We&apos;ll assess your use case,
              tell you what&apos;s realistic, and give you a straight answer — no
              pitch, no pressure.
            </motion.p>

            {/* Contact details row */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="mailto:hello@quishub.com"
                className="flex items-center gap-2 text-quishub-muted hover:text-quishub-black transition-colors duration-200"
              >
                <Mail size={16} className="text-quishub-black flex-shrink-0" />
                <span className="text-sm">hello@quishub.com</span>
              </a>
              <div className="flex items-center gap-2 text-quishub-muted">
                <Clock size={16} className="text-quishub-black flex-shrink-0" />
                <span className="text-sm">Respond within 24 hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
            <div className="surface-card inline-flex rounded-lg p-1 gap-1">
              <motion.button
                onClick={() => setActiveTab("calendar")}
                whileHover={{
                  boxShadow: activeTab !== "calendar" ? "0 0 15px rgba(124, 58, 237, 0.15)" : "0 0 20px rgba(124, 58, 237, 0.35)",
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === "calendar"
                    ? "bg-quishub-black text-quishub-light"
                    : "text-quishub-muted hover:text-quishub-black"
                }`}
              >
                Book a Call
              </motion.button>
              <motion.button
                onClick={() => setActiveTab("form")}
                whileHover={{
                  boxShadow: activeTab !== "form" ? "0 0 15px rgba(124, 58, 237, 0.15)" : "0 0 20px rgba(124, 58, 237, 0.35)",
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === "form"
                    ? "bg-quishub-black text-quishub-light"
                    : "text-quishub-muted hover:text-quishub-black"
                }`}
              >
                Send a Message
              </motion.button>
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
                  className="text-quishub-black font-semibold tracking-heading"
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
                  className="text-quishub-black font-semibold tracking-heading"
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
                    className="flex items-center gap-3 text-quishub-black hover:opacity-80 transition-opacity duration-200"
                  >
                    <Mail size={18} className="text-quishub-black flex-shrink-0" />
                    <span className="text-sm">hello@quishub.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-quishub-muted">
                    <Clock size={18} className="text-quishub-black flex-shrink-0" />
                    <span className="text-sm">We typically respond within 24 hours</span>
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
    </>
  );
}
