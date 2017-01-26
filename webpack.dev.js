const webpack = require('webpack');
const deepAssign = require('deep-assign');

let webpackConfig = require('./webpack.base.js');

webpackConfig = deepAssign(webpackConfig, {
  entry: {
    'ixiao': [
      'client/index.js',
      'webpack-hot-middleware/client'
    ]
  },
  output: {
    publicPath: '/static/src',
    pathinfo: true
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      // exclude: [
      //   /node_modules/
      // ],
      loader: 'babel',
      options: {
        'env': {
          'development': {
            'presets': ['react-hmre']
          }
        },
        'plugins': [
          ["import", [{
            "style": "css",
            "libraryName": "antd-mobile"
          }]]
        ]
      }
    }, {
      test: /\.css/,
      // exclude: [
      //   /node_modules/
      // ],
      use: ['style?sourceMap', 'css?sourceMap', 'postcss']
    },{
      test: /\.scss/,
      // exclude: [
      //   /node_modules/
      // ],
      use: ['style?sourceMap', 'css?sourceMap', 'postcss', 'sass?sourceMap']
    }, {
      test: /\.(jpg|png|gif|eot|svg|ttf|woff)$/,
      // exclude: [
      //   /node_modules/
      // ],
      loader: 'url'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'framework'
    }),
  ],
  devtool: 'cheap-module-source-map'
});

module.exports = webpackConfig;
