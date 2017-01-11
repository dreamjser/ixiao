import { Route, IndexRoute, path } from "react-router";
import React from "react";

import Home from "page/home";
import Counter from "page/counter";
import Todo from "page/todo";

export default (
  <Route name="home" path="/" component={Home}>
      <IndexRoute component={Counter} />
      <Route path="Counter" component={Counter} />
      <Route path="todo" component={Todo} />
  </Route>
);
