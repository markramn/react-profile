const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080d1a',
          text: '#e4e4de',
          accent: '#1458c5',
          secondary: '#0a1638',
          highlight: '#ec8585',
        },
        light: {
          bg: '#e4e4de',
          text: '#080d1a',
          accent: '#1458c5',
          secondary: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-light-secondary': theme('colors.light.secondary'),
          '--color-dark-secondary': theme('colors.dark.secondary'),
          '--color-light-accent': theme('colors.light.accent'),
          '--color-dark-accent': theme('colors.dark.accent'),
          '--color-dark-highlight': theme('colors.dark.highlight'),
        }
      })
    }
  ],
}