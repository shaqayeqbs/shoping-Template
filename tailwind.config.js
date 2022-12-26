/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js,jsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./@core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { green: "#238b44" },
    maxWidth: "initial",
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "0rem",
      },
      margin: {
        DEFAULT: "10rem",
      },
    },
  },
  plugins: [],
};
