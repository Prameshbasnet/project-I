/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#e31765",
      },
      keyframes: {
        zoomIn: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.2)",
          },
        },
      },
      animation: {
        zoomIn: "zoomIn 5s ease forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
