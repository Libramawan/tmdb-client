module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          dark: '#393189',
          light: '#4B43A7',
        },
        yellow: '#FADA5A',
        grey: '#34394d',
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
