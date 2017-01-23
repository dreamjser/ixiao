const webpack = require('webpack');
const deepAssign = require('deep-assign');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require('./config');

let webpackConfig = require('./webpack.base.js');

webpackConfig = deepAssign(webpackConfig, {
  entry: {
    'ixiao': [
      'client/index.js',
    ],
  },
  output: {
    publicPath: config.static,
    filename: 'js/[name].js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [
        /node_modules/
      ],
      loader: 'babel'
    }, {
      test: /\.scss/,
      exclude: [
        /node_modules/
      ],
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'framework'
    }),
  ]
});

module.exports = webpackConfig;
