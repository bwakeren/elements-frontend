module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        category: "#808191",
        categoryHover: "#1657FF",
        primary: "#121212",
        secondary: "#5B5B5B",
        blue: "#121155",
      },
      colors: {
        button: {
          primary: {
            orange: "#FF7C57",
            hover: "#FF5525",
          },
        },
        main: "#FFFFFF",
        category: "rgba(108, 93, 211, 0.05)",
        blue: "#7993E1",
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
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
