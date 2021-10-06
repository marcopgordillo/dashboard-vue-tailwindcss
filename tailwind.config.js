const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '115': '1.15',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
