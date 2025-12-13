/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF9E02",
          orangeLight: "#FFB412",
          orangeDark: "#F16900",
          orangeDeep: "#FF8819",
          blue: "#304479",
          brown: "#402C23",
          red: "#8C0A0A",
          grey: "#D9D9D9",
        }
      },
      fontFamily: {
        // Setting everything to Open Sans to ensure full website coverage
        sans: ['Open Sans', 'sans-serif'],
        mandali: ['Open Sans', 'sans-serif'],
        inter: ['Open Sans', 'sans-serif'],
        heebo: ['Open Sans', 'sans-serif'],
        ibmSans: ['Open Sans', 'sans-serif'],
        ibmMono: ['Open Sans', 'sans-serif'],
        kaisei: ['Open Sans', 'sans-serif'],
        kopub: ['Open Sans', 'sans-serif'],
        poppins: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
