const webpack = require('webpack');
const path = require('path');


let config = {
  context: __dirname,
  entry: {
    'ixiao': [
      'client/index.js',
      'webpack-hot-middleware/client'
    ],
    'framework': [
      'promise-polyfill',
      'react',
      'react-dom',
    ]
  },
  output: {
    path: '/static/',
    publicPath: '/static/',
    filename: '[name].js',
    chunkFilename: '/static/[name]-[chunkhash:8].js',
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
        "env": {
          "development": {
            "presets": ["react-hmre"]
          }
        }
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'framework'
    }),
  ],
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: [".js", ".json", ".jsx"]
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  devtool: 'cheap-module-source-map'
}

module.exports = config;
