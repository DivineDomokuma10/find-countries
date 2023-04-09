/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "shadow-light": "0px 1px 7px rgba(0, 0, 0, 0.25)",
        "shadow-dark": "0px 1px 7px rgba(172, 166, 166, 0.55)",
      },
    },
  },
  plugins: [],
};
