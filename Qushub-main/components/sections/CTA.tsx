"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import GlowLayout from "@/components/GlowLayout";
import { GlowButton } from "@/components/OctacsTheme";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CTA() {
  return (
    <GlowLayout className="section-light section-padding">
      <div className="container-content">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-[640px] mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-quishub-black font-semibold tracking-heading"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Ready to build something that actually works?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-5 text-base text-quishub-muted"
          >
            Book a free 30-minute call. We&apos;ll look at your use case, tell
            you what&apos;s actually possible, and give you a straight answer -
            whether that means working with us or not.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/contact">
              <GlowButton>Book a Discovery Call</GlowButton>
            </Link>
            <a href="mailto:hello@quishub.com">
              <Button variant="ghost">hello@quishub.com</Button>
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 text-[13px] text-quishub-muted"
          >
            No sales pitch. No commitment. Just honest engineering advice.
          </motion.p>
        </motion.div>
      </div>
    </GlowLayout>
  );
}

