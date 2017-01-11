import webpack from 'webpack';
import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import {renderToString} from 'react-dom/server';
import {
	createStore
} from 'redux';
import {
	rootReducer
} from '../common/reducers';
import routes from 'routes';
import {
	RoutingContext,
	match
} from 'react-router';
import {
	Provider
} from 'react-redux';

import config from '../webpack.config';


const app = express();
const port = 3000;
const compiler = webpack(config);

if(process.env.NODE_ENV !== 'production'){
  app.use(
  	webpackDevMiddleware(compiler, {
  		noInfo: true,
  		stats: {
  			colors: true,
  			timings: true,
  			modules: false
  		},
  		publicPath: config.output.publicPath
  	})
  );

  app.use(webpackHotMiddleware(compiler));
}else{
  app.use('/static', express.static(__dirname + '/../dist'));
}
// app.use('/static', express.static(__dirname + '/../static/dist'));

app.set('views', './server/views');
app.set('view engine', 'pug');

app.get("/*", function (req, res) {

	match({
		routes,
		location: req.url
	}, (err, redirectLocation, renderProps) => {

		if (err) {
			console.error(err);
			return res.status(500).end('Internal server error');
		}

		if (!renderProps){
			return res.status(404).end('Not found');
    }

		const store = createStore(rootReducer);

		const app = (
			<Provider store={store}>
        {() =>
          <RoutingContext {...renderProps} />
        }
      </Provider>
		);
    console.log('app:'+app);
    const html = renderToString(app);
    const initState = store.getState();

    res.render('index', {
      html,
      initState,
    });

	});
});

app.listen(port, function (error) {
	if (error) {
		console.error(error)
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
	}
})
