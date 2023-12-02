/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        darkest: "#HEX",
        dark: "#HEX",
        mid: "#HEX",
        light: "#HEX",
        lightest: "#HEX",
        brand: "#HEX",
      },
    },
  },
  plugins: [],
};
