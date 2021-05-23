module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: '#FADA5A',
        grayDark: '#34394d',
        cyan: '#A4F7D7',
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
