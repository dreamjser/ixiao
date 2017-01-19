import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../../webpack.config';

const compiler = webpack(config);

export const devMiddleWare =
	webpackDevMiddleware(compiler, {
		quiet: true,
		stats: {
			colors: true
		},
		publicPath: config.output.publicPath
	});

export const hotMiddleware = webpackHotMiddleware(compiler);
