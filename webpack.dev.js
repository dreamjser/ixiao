const webpack = require('webpack');
const deepAssign = require('deep-assign');

let webpackConfig = require('./webpack.base.js');

webpackConfig = deepAssign(webpackConfig, {
  entry: {
    'ixiao': [
      'webpack-hot-middleware/client',
      'client/index.js',
    ],
  },
  output: {
    publicPath: '/static/src',
    pathinfo: true
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [
        /node_modules/
      ],
      loader: 'babel',
      options: {
        'env': {
          'development': {
            'presets': ['react-hmre']
          }
        },
      }
    },{
      test: /\.scss/,
      exclude: [
        /node_modules/
      ],
      use: ['style?sourceMap', 'css?sourceMap', 'postcss', 'sass?sourceMap']
    }, {
      test: /\.(jpg|png|gif|eot|svg|ttf|woff)$/,
      exclude: [
        /node_modules/
      ],
      loader: 'url'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'framework'
    }),
  ],
  devtool: 'cheap-module-source-map'
});

module.exports = webpackConfig;
