/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nunitoSans: ['Nunito Sans', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}