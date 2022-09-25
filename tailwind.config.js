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

        'destination': "url('/assets/destination/background-destination-desktop.jpg')",
        'destination-t': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-m': "url('/assets/destination/background-destination-mobile.jpg')",
      },
      fontFamily: {
        nav: "Barlow Condensed",
        h1: "Bellefair",
        h2: "Bellefair",
        h5: "Barlow Condensed",
        sh1: "Bellefair",
        sh2: "Barlow Condensed",
        p: "Barlow",
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'scale(0.95) translateY(5%)', opacity: "0.25" },
          '100%': { transform: 'scale(1) translateY(0)', opacity: "1" },
        },
        fadeIn: {
          '0%': { transform: 'scale(0.95)', opacity: "0.0" },
          '100%': { transform: 'scale(1)', opacity: "1" },
        },
        navIn: {
          '0%': { transform: 'translateX(100%)', },
          '100%': { transform: 'translateX(0)', },
        },
        navOut: {
          '0%': { transform: 'translateX(0)', },
          '100%': { transform: 'translateX(100%)', },
        },
      },

      animation: {
        "slide-in": "slideIn 200ms ease-in-out",
        "fade-in": "fadeIn 500ms ease-in-out",
        "nav-in": "navIn 200ms ease-in-out",
        "nav-out": "navOut 200ms ease-in-out",
      }
    },
  },
  plugins: [],
}
