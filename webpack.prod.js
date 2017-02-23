const webpack = require('webpack');
const path = require('path');
const deepAssign = require('deep-assign');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');

let webpackConfig = require('./webpack.base.js');

webpackConfig = deepAssign(webpackConfig, {
  entry: {
    'ixiao': [
      'client/index.js',
    ],
  },
  output: {
    publicPath: '//s1.dreamjser.com/',
    path: path.resolve(__dirname, 'static/dist'),
    filename: 'js/[name].[chunkhash:16].js',
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
      loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader'])
    },{
      test: /\.(jpg|png|gif|eot|svg|ttf|woff)$/,
      exclude: [
        /node_modules/
      ],
      loader: 'file?name=files/[name].[hash:16].[ext]'
    }]
  },
  plugins: [
    new AssetsPlugin({
      path: path.join(__dirname, 'server'),
      filename: 'assets.json'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:16].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'framework'
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
});

module.exports = webpackConfig;
