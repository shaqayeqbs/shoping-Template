/** @type {import('tailwindcss').Config} */
const mainColor = "rgb(35, 139, 68)";
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
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
        // primary: "var(--color-text-base)",
        primary: withOpacity("--color-primary"),
        muted: "var(--color-text-muted)",
        text: withOpacity("--color-text"),
        color: withOpacity("--color-primary"),
      },
    },
    backgroundColor: {
      skin: {
        background: withOpacity("--color-background"),
        fill: withOpacity("--color-primary"),
        secondary: withOpacity("--color-secondary"),
        opacity: "var(--color-fill-oppacity)",
        "button-primary": withOpacity("--color-primary"),
        "button-primary-hover": "var(--color-button-primary-hover)",
      },
    },

    colors: {
      primary: withOpacity("--color-primary"),
      second: withOpacity("--color-secondary"),
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
