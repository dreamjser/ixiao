import webpack from 'webpack';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import {
  renderToString
} from 'react-dom/server';

import {
  rootReducer
} from 'reducers';

import {
  RouterContext,
  match
} from 'react-router';

import {
  Provider
} from 'react-redux';

import React from 'react';
import routes from 'routes';
import configureStore from 'store';
import config from '../webpack.config';
import {
  fetchComponentDataBeforeRender
} from 'api/fetchComponentDataBeforeRender';

const app = express();
const port = 3000;
const compiler = webpack(config);

if (process.env.NODE_ENV !== 'production') {
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      stats: {
        colors: true
      },
      publicPath: config.output.publicPath
    })
  );

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use('/static', express.static(__dirname + '/../dist'));
}

app.set('views', './server/views');
app.set('view engine', 'pug');

// 后台管理系统路由
app.get('/admin', function(req, res){
  res.render('admin');
});

// 主站路由
app.get("/*", function(req, res) {

  match({
    routes,
    location: req.url
  }, (err, redirectLocation, renderProps) => {

    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) {
      return res.status(404).end('Not found');
    }

    const store = configureStore();
    const InitView = (
      <Provider store={store}>
          <RouterContext {...renderProps} />
      </Provider>
    );

    fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
      .then(() => {
        const html = renderToString(InitView);
        const initState = JSON.stringify(store.getState());

        res.render('index',{
          html,
          initState
        })
      })
      .catch(err => {
        console.log(err)
        res.end(renderFullPage("", {}))
      });

  });
});



app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
