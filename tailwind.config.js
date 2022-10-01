/** @type {import('tailwindcss').Config} */

const prefix = require('./next.config').publicRuntimeConfig?.assetsPrefix || ''

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "layout": '136px 1fr',
        "layout-t": '96px 1fr',
        "layout-m": '64px 1fr',
      },
      colors: {
        "main": "rgb(11, 13, 23)",
        "accent": "rgb(208, 214, 249)"
      },
      backgroundImage: {

        'home': `url('${prefix}/assets/home/background-home-desktop.jpg')`,
        'home-t': `url('${prefix}/assets/home/background-home-tablet.jpg')`,
        'home-m': `url('${prefix}/assets/home/background-home-mobile.jpg')`,

        'destination': `url('${prefix}/assets/destination/background-destination-desktop.jpg')`,
        'destination-t': `url('${prefix}/assets/destination/background-destination-tablet.jpg')`,
        'destination-m': `url('${prefix}/assets/destination/background-destination-mobile.jpg')`,

        'crew': `url('${prefix}/assets/crew/background-crew-desktop.jpg')`,
        'crew-t': `url('${prefix}/assets/crew/background-crew-tablet.jpg')`,
        'crew-m': `url('${prefix}/assets/crew/background-crew-mobile.jpg')`,

        'technology': `url('${prefix}/assets/technology/background-technology-desktop.jpg')`,
        'technology-t': `url('${prefix}/assets/technology/background-technology-tablet.jpg')`,
        'technology-m': `url('${prefix}/assets/technology/background-technology-mobile.jpg')`,
      },
      fontFamily: {
        nav: "Barlow Condensed",
        h1: "Bellefair",
        h2: "Bellefair",
        h3: "Bellefair",
        h4: "Bellefair",
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
