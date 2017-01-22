import { Route, IndexRoute, path } from "react-router";
import React from "react";

import App from "../containers/app";
import Todo from "../containers/todo";

import Counter from "../components/counter";
import Error404 from "../components/404";

export default (
  <Route name="App" path="/" component={App}>
      <IndexRoute component={Counter} />
      <Route path="Counter" component={Counter} />
      <Route path="todo" component={Todo} />
      <Route path="*" component={Error404} />
  </Route>
);
