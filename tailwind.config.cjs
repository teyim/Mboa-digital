/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend"],
        SG: ["Space Grotesk"],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
