/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    'roboto': ['Roboto', 'Arial', 'sans-serif'],
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

