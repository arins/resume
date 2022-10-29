/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'] 
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    }
  },
  plugins: [],
  safelist:[
    "print:pb-28",
    "print:pb-32",
    "print:pb-36",
    "print:pb-56",
    "print:pb-72",
    "print:pb-128"
  ]
}
