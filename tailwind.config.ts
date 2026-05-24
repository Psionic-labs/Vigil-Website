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
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e", // primary accent: Steel Teal
          800: "#115e59", // hover brand color
          900: "#134e5a",
          950: "#042f2e",
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
