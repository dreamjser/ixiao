import { combineReducers } from 'redux';
import todo from 'reducers/todo';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
