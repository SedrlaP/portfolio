/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "!node_modules"
  ],
  theme: {
    extend: {
      screens: {
        'mobile-xs': '240px',
        'mobile-sm': '370px',
        'mobile-md': '400px',
        'tablet': '640px',
        'desktop': '1080px'
      }
    },
  },
  plugins: [],
}

