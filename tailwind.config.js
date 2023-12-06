/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      main: ["main", "sans-serif"],
    },
    extend: {
      colors: {
        "main-font": "#01121c",
      },
    },
  },
  plugins: [],
};
