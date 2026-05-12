"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface OctacsThemeProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function GlowButton({ className, children, ...props }: GlowButtonProps) {
  return (
    <motion.button
      whileTap="tap"
      className={cn(
        "relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg bg-white px-6 text-sm font-semibold text-black",
        "transition-shadow duration-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <motion.span
        aria-hidden="true"
        variants={{
          tap: {
            scale: [0.15, 2.4],
            opacity: [0.5, 0],
            transition: { duration: 0.45, ease: "easeOut" },
          },
        }}
        className="pointer-events-none absolute inset-0 m-auto h-24 w-24 rounded-full border border-sky-300/80 opacity-0"
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export default function OctacsTheme({
  children,
  className,
  contentClassName,
}: OctacsThemeProps) {
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 1200], [0, -32]);
  const blueY = useTransform(scrollY, [0, 1400], [0, -58]);
  const purpleY = useTransform(scrollY, [0, 1400], [0, -42]);

  return (
    <div
      className={cn(
        "relative min-h-screen text-[rgb(var(--quishub-black-rgb))]",
        className
      )}
    >
      <div className="fixed inset-0 w-full min-h-screen overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "var(--octacs-bg)" }}
        />

        <motion.div className="absolute inset-0 opacity-20" style={{ y: gridY }}>
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(var(--octacs-grid-rgb), var(--octacs-grid-opacity)) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--octacs-grid-rgb), var(--octacs-grid-opacity)) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
        </motion.div>

        <motion.div
          className="octacs-nebula-blue absolute -left-24 top-[-10rem] h-[18rem] w-[18rem] rounded-full blur-[150px] md:-left-28 md:h-[34rem] md:w-[34rem] md:blur-[200px] mix-blend-screen"
          style={{ y: blueY }}
        />
        <motion.div
          className="octacs-nebula-purple absolute -right-20 bottom-[-12rem] h-[16rem] w-[16rem] rounded-full blur-[150px] md:-right-24 md:h-[32rem] md:w-[32rem] md:blur-[200px] mix-blend-screen"
          style={{ y: purpleY }}
        />
      </div>

      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </div>
  );
}
