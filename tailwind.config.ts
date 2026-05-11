import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Fonds sombres (presque purs noirs, premium)
        ink: {
          900: "#0A0A0A",
          800: "#141414",
          700: "#1F1F1F",
        },
        slate: {
          950: "#0A0A0A",
        },
        muted: "#737373",
        surface: "#FAFAFA",
        border: "rgba(10, 10, 10, 0.08)",
        // Anciens tokens d'accent — désormais en niveaux de gris
        indigo: {
          50: "#F5F5F5",
          100: "#E5E5E5",
          500: "#404040",
          600: "#0A0A0A",
          700: "#000000",
        },
        violet: {
          400: "#737373",
          500: "#262626",
          600: "#0A0A0A",
        },
        cyan: {
          300: "#D4D4D4",
          400: "#A3A3A3",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "SF Pro Display",
          "Inter",
          "Geist",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Inter",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.025em",
      },
      borderRadius: {
        xl2: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10,10,10,0.04), 0 8px 24px rgba(10,10,10,0.06)",
        glow: "0 10px 40px -10px rgba(0,0,0,0.35)",
        glowViolet: "0 12px 40px -10px rgba(0,0,0,0.45)",
        ring: "0 0 0 1px rgba(10,10,10,0.18)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(10,10,10,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shine: "shine 6s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        gradientShift: "gradientShift 12s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
