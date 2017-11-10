const resolve = require('path').resolve;
const webpack = require('webpack');

require('dotenv').config();

const live = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const context = resolve('assets/js/');

module.exports = {
  context,
  entry: { app: './app.js' },
  output: {
    filename: '[name].js',
    path: resolve('build/assets/js/'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [context],
      use: [{ loader: 'babel-loader' }],
    }],
  },
  plugins: !live
    ? [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ]
    : [],
};
