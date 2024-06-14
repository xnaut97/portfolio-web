/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)"
          },
        },
        hopin: {
          from: {
            transform: "scaleX(0) scaleY(0)",
          },
          to: {
            transform: "scaleX(1) scaleY(1)",
          },
        },
        fadein: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
        hopein: "hopein 1s ease 300ms",
        fadeIn: "fadein 1s ease 300ms",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),

  ]
}

