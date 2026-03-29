import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f8fb",
        foreground: "#101828",
        muted: "#667085",
        line: "#e4e7ec",
        panel: "#ffffff",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(16, 24, 40, 0.06)",
        hover: "0 14px 32px rgba(16, 24, 40, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.55s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
