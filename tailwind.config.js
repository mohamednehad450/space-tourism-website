/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "rgb(11, 13, 23)",
        "accent": "rgb(208, 214, 249)"
      },
      backgroundImage: {

        'home': "url('/assets/home/background-home-desktop.jpg')",
        'home-t': "url('/assets/home/background-home-tablet.jpg')",
        'home-m': "url('/assets/home/background-home-mobile.jpg')",
      },
      fontFamily: {
        nav: "Barlow Condensed",
        h1: "Bellefair",
        h5: "Barlow Condensed",
        p: "Barlow",
      }
    },
  },
  plugins: [],
}
