/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "host-orange-10": "#FF8E3C",
    },
    fontFamily: {
      roboto: ["Roboto Condensed"],
    },
    extend: {},
  },
  plugins: [],
};
