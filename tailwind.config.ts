import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#06080E",
          900: "#0B0F19",
          800: "#111827",
          700: "#1F2937",
        },
        cyan: {
          glow: "#00F0FF",
          accent: "#06B6D4",
        },
        purple: {
          electric: "#8B5CF6",
          deep: "#7C3AED",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-dark": "radial-gradient(at 10% 10%, rgba(6, 182, 212, 0.12) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(139, 92, 246, 0.12) 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(6, 182, 212, 0.2)" },
          "100%": { boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

