/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "Rubik": "Rubik"
      },

      colors: {
        'VDarkGray': '#2b2b2b',
        'DarkGray': '#969696'
      }
    },
  },
  plugins: [],
}
