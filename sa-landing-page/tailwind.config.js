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
        barlow : ['Barlow', ...defaultTheme.fontFamily.sans],
        fraunces: ['Fraunces', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}