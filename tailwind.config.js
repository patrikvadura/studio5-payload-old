const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e91e63',
          dark: '#c0154f',
          light: '#f53878',
        },
        secondary: {
          DEFAULT: '#000',
          dark: '#000',
          light: '#252525',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
    nextui({
      defaultTheme: 'light',
    }),
  ],
}
