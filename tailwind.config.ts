import mytheme from "./utils/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: mytheme.colors.primary,
  			secondary: mytheme.colors.secondary,
  			supporting: mytheme.colors.supporting
  		},
  		fontFamily: {
  			'gotham': ['var(--font-gotham)']
  		},
  	}
  },
  plugins: [import("tailwindcss-animate")],
};
