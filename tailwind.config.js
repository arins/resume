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
        'a1': '1.6rem'
      },
      fontSize:{
        'xxs': '10px'
      }
    }
  },
  plugins: [],
  safelist:[
  ]
}
