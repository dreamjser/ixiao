import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/root';

const logger = createLogger();

const composeEnhancers =
    process.env.NODE_ENV !== 'production'?
      composeWithDevTools: compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
);

export default store;
