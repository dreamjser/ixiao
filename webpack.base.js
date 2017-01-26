const webpack = require('webpack');
const path = require('path');

let webpackConfig = {
  context: __dirname,
  entry: {
    'framework': [
      'promise-polyfill',
      'react',
      'react-dom',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'static/src'),
    filename: 'js/[name].js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.web.js', '.js', '.jsx', '.json'],
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
}

module.exports = webpackConfig;
