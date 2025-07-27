/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      purple: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgb(var(--color-primary) / ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
          return `rgb(var(--color-primary) / var(${opacityVariable}, 1))`;
        }
        return `rgb(var(--color-primary))`;
      },
      gray: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgb(var(--color-gray) / ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
          return `rgb(var(--color-gray) / var(${opacityVariable}, 1))`;
        }
        return `rgb(var(--color-gray))`;
      },
      yellow: {
        400: "rgb(var(--color-yellow))",
      },
      white: "rgb(var(--color-white))",
      black: "rgb(var(--color-black))",
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },
      keyframes: {
        "animation-delay-200": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
        },
      },
    },
  },
  plugins: [],
};
