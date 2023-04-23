/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')({
    input : {
      maxWidth : '20px',
    },
  })],
}

