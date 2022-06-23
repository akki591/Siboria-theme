/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ["Poppins","sans-serif"],
      inter: ["Inter","sans-serif"],
    },
    extend: {
      colors: {
        primary: '#FF7B29',
        secondary: '#132742',
        accent: '#263FA4',
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
