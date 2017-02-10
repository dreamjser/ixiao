import {
	Route,
	IndexRoute,
	path
} from 'react-router';
import React from 'react';

import App from '../containers/app';
import Register from '../containers/register';
import Login from '../containers/login';
import My from '../containers/my';
import Error404 from '../components/404';

export default (
	<Route name="App" path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/my" component={My} />
      <Route path="*" component={Error404} />
  </Route>
);
