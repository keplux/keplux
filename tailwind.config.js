const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.cyan,
      },
      fontFamily: {
        sans: ['Rubik'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
