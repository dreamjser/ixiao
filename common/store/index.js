import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {rootReducer} from 'reducers';

const logger = createLogger();

const composeEnhancers =
    process.env.NODE_ENV !== 'production'?
      composeWithDevTools: compose;

export default function configureStore(initState){
  const store = createStore(
    rootReducer,
    initState,
    composeEnhancers(
      applyMiddleware(thunk, logger)
    )
  );

  //热替换选项
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const {nextReducer} = require('../reducers');
      store.replaceReducer(nextReducer)
    })
  }

  return store;
}
