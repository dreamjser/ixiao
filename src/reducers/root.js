import { combineReducers } from 'redux';
import todoReducer from 'reducers/todo';

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
