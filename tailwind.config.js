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
          '400': '#5C5885',
        }
      },
      gridTemplateColumns: {
        'af-20': 'repeat(auto-fit, minmax(0, 5rem))',
      },
    },
  },
  plugins: [],
}