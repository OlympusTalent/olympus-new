import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ot: {
          obsidian: "#070712",
          midnight: "#0C0C1A",
          graphite: "#12121F",
          carbon: "#18182A",
          steel: "#232338",
          fog: "#2E2E4A",
          bone: "#FFFFFF",
          ash: "#FFFFFF",
          smoke: "#E8E8F0",
          iron: "#4A4A60",
          violet: "#8B5CF6",
          purple: "#7C3AED",
          cyan: "#22D3EE",
          signal: "#4ADE80",
          crimson: "#EF4444",
          warn: "#F59E0B",
          magenta: "#EC4899",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["6.5rem", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-md": ["3rem",   { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "heading-lg": ["2rem",   { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "heading-md": ["1.5rem", { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "micro":      ["0.75rem",{ lineHeight: "1.4",  letterSpacing: "0.14em" }],
      },
      backgroundImage: {
        "ot-gradient": "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 45%, #22D3EE 100%)",
        "ot-gradient-text": "linear-gradient(135deg, #FFFFFF 0%, #C4B5FD 35%, #22D3EE 100%)",
        "tier-ignite":  "linear-gradient(135deg, #EC4899 0%, #A855F7 100%)",
        "tier-ascend":  "linear-gradient(135deg, #14B8A6 0%, #22D3EE 100%)",
        "tier-velocity":"linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
        "tier-titan":   "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",
        "tier-black":   "linear-gradient(135deg, #D1D5DB 0%, #6B7280 100%)",
      },
      maxWidth: {
        content: "1440px",
        wide: "1680px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "ticker": "ticker 75s linear infinite",
        "fade-up": "fade-up 600ms cubic-bezier(0.22,1,0.36,1) both",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
