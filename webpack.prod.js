const webpack = require('webpack');
const path = require('path');
const deepAssign = require('deep-assign');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
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
    path: path.resolve(__dirname, 'static/dist'),
    filename: 'js/[name].[chunkhash].js',
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
      loader: 'file?name=files/[name].[hash].[ext]'
    }]
  },
  plugins: [
    new AssetsPlugin({
      path: path.join(__dirname, 'server'),
      filename: 'assets.json'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css',
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
    new WebpackMd5Hash(),
  ]
});

module.exports = webpackConfig;
