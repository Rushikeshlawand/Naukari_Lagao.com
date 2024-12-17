/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'blueColor': '#3E54AC',
        'greyIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
       'textColor': '#252b36',
      },
    },
  },
  plugins: [],
};
