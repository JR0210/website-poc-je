module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F7F8FD",
          default: "#0C007D",
        },
        text: {
          2: "#223643",
        },
        gray: "#76868F",
        blue: {
          100: "#484EB5",
          200: "#0B0868",
          300: "#0B0947",
          400: "#5C5885",
        },
      },
      gridTemplateColumns: {
        "af-20": "repeat(auto-fit, minmax(0, 5rem))",
      },
    },
  },
  plugins: [],
};
