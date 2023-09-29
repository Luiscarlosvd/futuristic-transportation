const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        ace: ['Bruno Ace', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primaryGreen: '#97BF0F',
        secondaryOrange: '#FFB400',
        darkGrey: '#252525',
        darkOrange: 'rgb(129 54 0)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
