const extractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const paths = {
  entry: 'src/js/entry/',
  bundle: 'src/js/bundle/'
}

let config = {
  context: __dirname,
  entry: {
    redux: paths.entry + 'redux'
  },
  output: {
    path: __dirname,
    publicPath: '//s1.dreamjser.com/',
    filename: paths.bundle + '[name].js',
    chunkFilename: paths.bundle + '[name].js',
    pathinfo: true
  },
  module: {
    rules: [{
      test: /\.scss$/,
      include: [
        /src\/components/,
        /src\/routers/,
        /src\/scss/,
      ],
      use: ['style', 'css', 'sass']
    }, {
      test: /\.(js|jsx)$/,
      include: [
        /src\/components/,
        /src\/routers/,
        /src\/js\/entry/,
        /src\/js\/modules/,
      ],
      use: ['babel']
    }, {
      test: /\.(gif|png|jpg)$/,
      include: [
        /src\/components/,
        /src\/images/,
      ],
      loader: 'url'
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.optimize.CommonsChunkPlugin('common'),
  ],
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: [".js", ".json", ".jsx"],
    alias: {
      'component': 'src/components',
      'router': 'src/routers',
      'module': 'src/js/modules'
    }
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  externals: {
    'jquery': 'jQuery',
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: './node_modules/',
  },
  devServer:{
    port: 2000
  },
  devtool: 'cheap-module-source-map'
}

module.exports = config;
