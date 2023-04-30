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
  mode: "jit",

  content: [
    "./pages/*.{html,js,jsx}",
    "./templates/**/*.{html,js,jsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./@core/**/*.{js,ts,jsx,tsx}",
    "./@core/*.{js,ts,jsx,tsx}",
    "./@core/Layout/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: {
      skin: {
        // primary: "var(--color-text-base)",
        primary: "#7286D3",
        muted: "rgb(166, 166, 166)",
        text: "rgb(33, 33, 33,.8)",
        color: "#7286D3",
      },
    },
    backgroundColor: {
      skin: {
        background: "#FFF2F2",
        fill: "#7286D3",
        secondary: "#8EA7E9",
        opacity: "var(--color-fill-oppacity)",
        gray: "#E5E0FF",
        "button-primary-hover": "var(--color-button-primary-hover)",
      },
    },
    bordercolor: {
      background: withOpacity("#FFF2F2"),
      fill: withOpacity("#7286D3"),
      secondary: withOpacity("#8EA7E9"),
      opacity: "var(--color-fill-oppacity)",
      gray: "#E5E0FF",
      "button-primary-hover": "var(--color-button-primary-hover)",
    },

    colors: {
      primary: withOpacity("#7286D3"),
      second: withOpacity("#8EA7E9"),
      bordercolor: "#E5E0FF",
    },
  },
  plugins: [],
};
