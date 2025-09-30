
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#212121',
        lightpink: '#F8E0C8',
        rock: '#B2765E',
        orange: '#FF8100',
        darkpink:'#C96564',       
      },
    },
  },
  plugins: [
        require('tailwind-scrollbar-hide'),
      ],
    }
  

