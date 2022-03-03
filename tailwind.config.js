module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C007D',
        blue: {
          '100': '#484EB5',
          '200': '#0B0868',
          '300': '#0B0947',
        }
      }
    },
  },
  plugins: [],
}