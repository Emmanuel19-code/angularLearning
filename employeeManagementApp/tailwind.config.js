/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito'],
        'roboto': ['Roboto'],
      }
    },
  },
  plugins: [],
}