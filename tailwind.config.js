/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
      lightgreen: {
        ...require("daisyui/src/colors/themes")["[data-theme=cmyk]"],
        "fontFamily": 'Balsamiq San,Chalkboard,comic sans ms,' + defaultTheme.fontFamily.sans,
        primary: "#1FAB89",
        secondary: "#62D2A2",
        accent: "#9DF3C4",
        neutral: "#D7FBE8",
      },
      darkgreen: {
        ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
        "fontFamily": 'Balsamiq San,Chalkboard,comic sans ms,' + defaultTheme.fontFamily.sans,
        primary: "#1FAB89",
        secondary: "#62D2A2",
        accent: "#9DF3C4",
        neutral: "#D7FBE8",
      },
      lightred: {
        ...require("daisyui/src/colors/themes")["[data-theme=cmyk]"],
        "fontFamily": 'Balsamiq San,Chalkboard,comic sans ms,' + defaultTheme.fontFamily.sans,
        primary: "#F67280",
        secondary: "#C06C84",
        accent: "#6C5B7B",
        neutral: "#355C7D",
      },
      darkred: {
        ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
        "fontFamily": 'Balsamiq San,Chalkboard,comic sans ms,' + defaultTheme.fontFamily.sans,
        primary: "#F67280",
        secondary: "#C06C84",
        accent: "#6C5B7B",
        neutral: "#355C7D",
      }}, 
    "cupcake", "bumblebee", "emerald", "cyberpunk", "valentine", "halloween", "aqua", "pastel", "wireframe", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "night", "winter"],
  }
}
