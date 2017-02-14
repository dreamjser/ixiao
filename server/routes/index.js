import express from 'express';
import path from 'path';

import React from 'react';
import {
 renderToString
} from 'react-dom/server';

import {
 RouterContext,
 match
} from 'react-router';

import {
 Provider
} from 'react-redux';

import {
 rootReducer
} from '../../common/reducers';

// 客户端路由
import routes from '../../common/routes';
// redux的store生成函数
import configureStore from '../../common/store/configureStore';

import {
 fetchComponentDataBeforeRender
} from '../../common/api/fetchComponentDataBeforeRender';

// assets.json
import assetsObject from '../config/assets.js';

const router = express.Router();

router.get('*', (req, res) => {
  match({
    routes,
    location: req.url
  }, (err, redirectLocation, renderProps) => {

    if (err) {
      console.error(`err: ${err}`);
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

        res.render('index', {
          html,
          initState,
          assetsObject
        })
      })
      .catch(err => {
        console.log(3333);
        res.render('index', {
          html: '',
          initState: JSON.stringify({}),
          assetsObject
        })
      });
  });
});

export default router;
