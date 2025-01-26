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
  		xxs: '300px',
  		xs: '375px',
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		monitor: '1600px'
  	},
  	extend: {
  		colors: {
  			primary: mytheme.colors.primary,
  			secondary: mytheme.colors.secondary,
  			supporting: mytheme.colors.supporting
  		},
  		fontFamily: {
  			gotham: [
  				'var(--font-gotham)'
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'slide-right': {
  				'0%': {
  					transform: 'translateX(-15%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			'slide-left': {
  				'0%': {
  					transform: 'translateX(15%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			shrug: {
  				'0%': {
  					transform: 'translateZ(10px) scale(1.2) rotate(0deg)'
  				},
  				'20%': {
  					transform: 'translateZ(10px) rotate(-8deg) scale(1.2)'
  				},
  				'40%': {
  					transform: 'translateZ(10px) rotate(-3deg) scale(1.2)'
  				},
  				'60%': {
  					transform: 'translateZ(10px) rotate(3deg) scale(1.2)'
  				},
  				'80%': {
  					transform: 'translateZ(10px) rotate(8deg) scale(1.2)'
  				},
  				'100%': {
  					transform: 'translateZ(10px) scale(1.2) rotate(0deg)'
  				}
  			},
  			pulse: {
  				'0%, 100%': {
  					boxShadow: '0 0 0 0 var(--pulse-color)'
  				},
  				'50%': {
  					boxShadow: '0 0 0 8px var(--pulse-color)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'slide-right': 'slide-right 500ms ease-out',
  			'slide-left': 'slide-left 500ms ease-out',
  			'shrug': 'shrug 0.5s ease-in-out 2',
  			pulse: 'pulse var(--duration) ease-out infinite'
  		}
  	}
  },
  plugins: [import("tailwindcss-animate")],
}
