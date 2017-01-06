import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
// import Immutable from 'immutable';
import rootReducer from 'reducers/root';

const store = createStore(
  rootReducer
);


export default store;
