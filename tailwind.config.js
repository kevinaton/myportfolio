/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/style.css",
    "index.html",
    "./public/style.css"          
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "kev-darkslate": "#1c2635",
        "kev-darkslate2": "#161D2F"
      },
      backgroundImage: {
        'hero': "url('../public/img/bkg.png')",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  plugins: [],
}
