/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // if you're using the app router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",      // in case you store components inside src
  ],
  theme: {
    extend: {
      animation: {
        slowspin: 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}
