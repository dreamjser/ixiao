const webpack = require('webpack');
const path = require('path');


let config = {
  context: __dirname,
  entry: ['src/index.js', 'webpack-hot-middleware/client',],
  output: {
    path: path.resolve(__dirname, 'static'),
    publicPath: '/static/',
    filename: 'app.js',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
  devtool: 'cheap-module-source-map'
}

module.exports = config;
