import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        quishub: {
          black: "rgb(var(--quishub-black-rgb) / <alpha-value>)",
          blue: "#2563eb",
          purple: "#7c3aed",
          light: "rgb(var(--quishub-light-rgb) / <alpha-value>)",
          platinum: "rgb(var(--quishub-light-rgb) / <alpha-value>)",
          muted: "rgb(var(--quishub-muted-rgb) / <alpha-value>)",
          faint: "rgb(var(--quishub-faint-rgb) / <alpha-value>)",
          surface: "rgb(var(--quishub-surface-rgb) / <alpha-value>)",
          surfaceAlt: "rgb(var(--quishub-surface-alt-rgb) / <alpha-value>)",
          border: "rgb(var(--quishub-border-rgb) / <alpha-value>)",
          white: "#f8f8f7",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-sora)", "system-ui", "sans-serif"],
        ui: ["var(--font-tt-lakes)", "var(--font-sora)", "system-ui", "sans-serif"],
        display: ["var(--font-texar)", "var(--font-tt-lakes)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        heading: "-0.02em",
        hero: "-0.03em",
        label: "0.05em",
        "label-wide": "0.1em",
      },
      lineHeight: {
        body: "1.7",
        hero: "1.1",
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "12px",
        feature: "16px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slow-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "slow-float": "slow-float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
