const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const fontMagician = require('postcss-font-magician');
const normalize = require('postcss-normalize');

const plugins = [
  normalize(),
  fontMagician({ hosted: ['assets/fonts/'] }),
  autoprefixer({ cascade: false }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(cssnano({ preset: 'default' }));
}

module.exports = { plugins };
