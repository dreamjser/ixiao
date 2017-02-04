import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todo from './todo';

export const rootReducer = combineReducers({
  todo,
  form: formReducer
})

