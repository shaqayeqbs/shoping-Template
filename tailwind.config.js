/** @type {import('tailwindcss').Config} */
const mainColor = "rgb(35, 139, 68)";
module.exports = {
  content: [
    "./pages/*.{html,js,jsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./@core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: {
      skin: {
        primary: "var(--color-text-base)",
        muted: "var(--color-text-muted)",
        color: "var(--color-border-melo)",
      },
    },
    backgroundColor: {
      skin: {
        gray: "var(--color-bg-gray)",
        fill: "var(--color-fill)",
        opacity: "var(--color-fill-oppacity)",
        "button-primary": "var(--color-button-primary)",
        "button-primary-hover": "var(--color-button-primary-hover)",
      },
    },

    colors: {
      primary: "#238B44",
      second: "#56C679",
      bordercolor: "var(--color-border-melo)",
    },
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
