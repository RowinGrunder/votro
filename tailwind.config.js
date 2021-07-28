module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: {
          'dark': '#383358',
          'darker': '#25233a',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
