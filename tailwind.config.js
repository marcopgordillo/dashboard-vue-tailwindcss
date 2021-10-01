const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'mobile-pattern': "url('@/assets/pattern-background-mobile.svg')",
        'desktop-pattern': "url('@/assets/pattern-background-desktop.svg')",
      },
      colors: {
        'pale-blue': {
          100: 'hsl(225, 100%, 94%)', // primary-color-1
          200: 'hsl(245, 75%, 52%)', // primary-color-2
          300: 'hsl(245, 83%, 68%)', // primary-color-3
          400: 'hsl(225, 100%, 98%)', // neutral-color-1
          500: 'hsl(224, 23%, 55%)', // neutral-color-2
          600: 'hsl(223, 47%, 23%)', // neutral-color-3
          700: 'hsl(228, 45%, 44%)',
        }
      },
      spacing: {
        '90vw': '90vw'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
