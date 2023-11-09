/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bigShouldersD : [ 'Big Shoulders Display', ...defaultTheme.fontFamily.sans],
        lexendD : ['Lexend Deca', ...defaultTheme.fontFamily.sans] 
      }
    },
  },
  plugins: [],
}