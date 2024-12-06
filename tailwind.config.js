/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        appleGray: {
          50: "#F9F9F9", // Gris casi blanco
          100: "#F5F5F7", // Gris claro cálido
          200: "#ECECEC", // Gris claro neutro
          300: "#E5E5E5", // Gris más oscuro
          400: "#DCDCDC", // Gris para bordes
          700: "#4A4A4C", // Gris intermedio oscuro
          900: "#1D1D1F", // Gris oscuro
        },
        newRed: "#D50000",
        newGreen: "#333333",
        newLightGreen: "#82E575",
      },
    },
  },
  plugins: [],
};
