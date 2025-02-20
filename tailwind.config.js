/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B64D07",
        main: "#ECECE2",
        maroon: "#620d0d",
      },
      fontFamily: {
        hanuman: ["Hanuman", "serif"],
        bokor: ["Bokor", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
