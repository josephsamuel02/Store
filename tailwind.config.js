/** @type {import('tailwindcss').Config} */

// import withMT from "@material-tailwind/react/utils/withMT";

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        nunito: ["Nunito", " sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        courgette: ["Courgette", "cursive"],
        dayone: ["Days One", "sans-serif"],
        Palanquin: ["Palanquin Dark", "sans-serif"],
        RubikDistressed: ["Rubik Distressed", "cursive"],
        TitanOne: ["Titan One", "cursive"],
      },
      colors: {
        navDarkBlue: "#010656",
        Storepurple: "#6D28D9",
      },
    },
  },
  plugins: [],
};
