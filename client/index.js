import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory} from 'react-router';
import { ReduxRouter } from 'redux-router';
import routes from 'routes';
import configureStore from 'store';

const initState = window.__INITIAL_STATE__ || {};
const store = configureStore(initState);

render(
  <Provider store={store}>
      <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
