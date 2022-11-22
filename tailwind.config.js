/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-navy": {
          100:"#0a192f",
          200:"#112240",
          300:"#233554",
          400:"#020c1b",
          "shadow":"rgba(2,12,27,0.7)",
        },
        "custom-green": {
          100:"#64ffda",
          200:"57cbff"
        },
        "custom:slate": {
          100: "#8892b0",
          200:"#495670",
          "lightest":"#ccd6f6",
          "white":"#e6f1ff"
        }
      }
    },
  },
  plugins: [],
}
