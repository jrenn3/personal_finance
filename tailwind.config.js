/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
          customGreen: '#043b0b',
      },
      fontFamily: {
        giaza: ['Giaza', 'serif'], // Fall back to serif if Giaza isn't available
      },
    },
  },
  plugins: [],
}