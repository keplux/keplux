const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0000EE',
          50: '#A7A7FF',
          100: '#9292FF',
          200: '#6969FF',
          300: '#4141FF',
          400: '#1818FF',
          500: '#0000EE',
          600: '#0000B6',
          700: '#00007E',
          800: '#000046',
          900: '#00000E',
        },
        secondary: {
          DEFAULT: '#77EE00',
          50: '#D3FFA7',
          100: '#C9FF92',
          200: '#B4FF69',
          300: '#A0FF41',
          400: '#8BFF18',
          500: '#77EE00',
          600: '#5BB600',
          700: '#3F7E00',
          800: '#234600',
          900: '#070E00',
        },
        base: '#111111',
      },
      fontFamily: {
        sans: ['Rubik'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
