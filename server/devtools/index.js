import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../../webpack.dev';

const compiler = webpack(config);

export const devMiddleWare = () =>
  webpackDevMiddleware(compiler, {
    pathInfo: false,
    hot: true,
    stats: {
      colors: true
    },
    publicPath: config.output.publicPath
  });

export const hotMiddleware = () => webpackHotMiddleware(compiler);
