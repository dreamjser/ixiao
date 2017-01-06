const extractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


let config = {
  context: __dirname,
  entry: 'src/index.js',
  output: {
    path: __dirname,
    publicPath: '//s1.dreamjser.com/',
    filename: 'src/app.js',
    chunkFilename: 'dist/app-[chunkhash:8].js',
    pathinfo: true
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [
        /node_modules/
      ],
      use: ['babel']
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // new webpack.optimize.CommonsChunkPlugin('common'),
  ],
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: [".js", ".json", ".jsx"],
    alias: {
      'components': 'src/components',
      'routers': 'src/routers',
      'actions': 'src/actions',
      'constants': 'src/constants',
      'reducers': 'src/reducers',
      'containers': 'src/containers',
      'store': 'src/store',
    }
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  watch: true,
  devServer:{
    port: 2000
  },
  devtool: 'cheap-module-source-map'
}

module.exports = config;
