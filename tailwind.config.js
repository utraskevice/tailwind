/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green1: "#7ABCAC",
        yellow1: "#D8DA79",
        red1: "#C29486",
        gray1: "#DCDCDC",
      },
    },
  },
  plugins: [],
};
