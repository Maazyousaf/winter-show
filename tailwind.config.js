module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0B222",
        success: "#018F8C",
        black: "#141414",
        slate: "#F4F3EC",
      },
      screens: {
        xs: { min: "300px", max: "540px" },
        xs1: { min: "300px", max: "426px" },
        xs2: { min: "300px", max: "380px" },
      },
      lineHeight: {
        0: 0,
      },
      fontFamily: {
        Montserrat: "Montserrat",
        Noto: "Noto",
        "Cormorant-light": "Cormorant-light",
        "Crimson-Regular": "Crimson-Regular",
        "Crimson-Regular-I": "Crimson-Regular-I",
        "Crimson-Semibold": "Crimson-Semibold",
        "Crimson-Semibold-I": "Crimson-Semibold-I",
      },
    },
  },
  plugins: [],
};
