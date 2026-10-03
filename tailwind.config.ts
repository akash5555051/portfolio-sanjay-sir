import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A2540",
          navyDark: "#071A2E",
          navyCard: "#0B192F",
          red: "#E31E24",
          redHover: "#C8171D",
          redBright: "#EF4444",
          slateText: "#475569",
          slateLight: "#64748B",
          headingDark: "#0A2540",
          borderGray: "#E2E8F0",
          bgLight: "#FAFBFD",
          bgSoft: "#F8FAFC",
        },
        cardTint: {
          pinkBg: "#FEF2F2",
          pinkBorder: "#FEE2E2",
          pinkAccent: "#EF4444",
          pinkTag: "#FEE2E2",
          greenBg: "#F0FDF4",
          greenBorder: "#DCFCE7",
          greenAccent: "#16A34A",
          greenTag: "#DCFCE7",
          blueBg: "#EFF6FF",
          blueBorder: "#DBEAFE",
          blueAccent: "#2563EB",
          blueTag: "#DBEAFE",
          yellowBg: "#FFFBEB",
          yellowBorder: "#FEF3C7",
          yellowAccent: "#D97706",
          yellowTag: "#FEF3C7",
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "-apple-system", "sans-serif"],
        handwriting: ["'Caveat'", "cursive"],
        script: ["'Caveat'", "cursive"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        hover: "0 12px 32px -4px rgba(0, 0, 0, 0.08)",
      }
    },
  },
  plugins: [],
};

export default config;
