/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{html,js}'], // Add the HTML files to the content array
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#043b0b', // Dark Green (Logo Color)
          light: '#4CAF50', // Light Green (Accent)
          mint: '#d5f5e3', // Mint Green (Background Accent)
        },
        neutral: {
          dark: '#2c3e50', // Dark Gray (Text)
          light: '#ecf0f1', // Light Gray (Backgrounds)
          charcoal: '#34495e', // Charcoal (Footer/Headers)
        },
        support: {
          gold: '#f9c74f', // Soft Gold (Highlight)
          beige: '#f7ede2', // Warm Beige (Neutral Accent)
          blue: '#3a86ff', // Slate Blue (Secondary Accent)
          red: '#e63946', // Muted Red (Warnings/Errors)
        },
      },
      fontFamily: {
        giaza: ['Giaza', 'serif'], // Fall back to serif if Giaza isn't available
      },
    },
  },
  plugins: [],
}