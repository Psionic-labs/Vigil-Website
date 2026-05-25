import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        serif: ["var(--font-lora)", "serif"],
      },
      colors: {
        background: "#ffffff",
        foreground: "#0f172a", // slate-900
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8", // Sky blue accent
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1", // primary brand color
          800: "#075985", // hover brand color
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
