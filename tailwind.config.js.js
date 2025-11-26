/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0e0e0e',
        secondary: '#ffffff',
        tertiary: '#DD9951',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}