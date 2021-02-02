module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        category: "#808191",
        categoryHover: "#1657FF",
      },
      colors: {
        button: {
          primary: {
            orange: "#FF7C57",
            hover: "#FF5525",
          },
        },
        main: "#F6F8FE",
        category: "rgba(108, 93, 211, 0.05)",
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
      },
      fill: {
        category: "#1657FF",
      },
    },
    boxShadow: {
      product: "10px 0px 40px rgba(92, 128, 162, 0.1)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
