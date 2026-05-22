"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type CTAProps = {
  variant?: "light" | "dark";
};

export default function CTA({ variant }: CTAProps) {
  const isDark = variant === "dark";
  return (
    <section className="relative overflow-hidden py-32" id="contact">
      <div className="container-content relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-[700px] mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`font-display font-semibold tracking-heading mx-auto ${variant ? (isDark ? "text-white" : "text-[#0f172a]") : "text-quishub-black"}`}
            style={{ fontSize: "clamp(36px, 4.4vw, 68px)", lineHeight: 1.05, textWrap: 'balance' }}
          >
            Ready to build something that <span className="gradient-text">actually works</span>?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`mt-6 text-[18px] max-w-[620px] mx-auto ${variant ? (isDark ? "text-slate-400" : "text-[#64748b]") : "text-quishub-muted"}`}
            style={{ textWrap: 'pretty' }}
          >
            Book a free 30-minute call. We&apos;ll look at your use case, tell
            you what&apos;s actually possible, and give you a straight answer —
            whether that means working with us or not.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-medium text-[15px] text-white transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5 relative overflow-hidden"
              style={{
                background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)",
                boxShadow: "0 10px 26px -12px color-mix(in oklab, #7c3aed 55%, transparent)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a discovery call <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></div>
            </Link>
            <a 
              href="mailto:hello@quishub.com"
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-medium text-[15px] bg-transparent border transition-all duration-200 hover:-translate-y-0.5 ${variant ? (isDark ? "text-white border-white/20 hover:bg-white/10" : "text-[#0f172a] border-line-2 hover:bg-surface-2") : "text-quishub-black border-line-2 hover:bg-surface-2"}`}
            >
              hello@quishub.com
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`mt-8 text-[13.5px] opacity-80 ${variant ? (isDark ? "text-slate-400" : "text-quishub-muted") : "text-quishub-muted"}`}
          >
            No sales pitch. No commitment. Just honest engineering advice.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

