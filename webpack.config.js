const resolve = require('path').resolve;
const webpack = require('webpack');

const context = resolve('server/pages/assets/js/');

module.exports = {
  context,
  entry: {
    app: './app.js'
  },
  output: {
    filename: '[name].js',
    path: resolve('build/assets/js/'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [context],
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
