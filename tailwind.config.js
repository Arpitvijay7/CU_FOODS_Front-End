/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    base: false,
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
