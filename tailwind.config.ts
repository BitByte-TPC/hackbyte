import mytheme from "./utils/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "300px",
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      monitor: "1600px",
    },
    extend: {
      colors: {
        primary: mytheme.colors.primary,
        secondary: mytheme.colors.secondary,
        supporting: mytheme.colors.supporting,
      },
      fontFamily: {
        gotham: ["var(--font-gotham)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "slide-right": {
          "0%": { transform: "translateX(-15%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(15%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-right": "slide-right 500ms ease-out",
        "slide-left": "slide-left 500ms ease-out",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
}
