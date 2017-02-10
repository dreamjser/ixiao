import {
	combineReducers
} from 'redux';
import {
	reducer as formReducer
} from 'redux-form';
import register from './register';
import login from './login';
import token from './token';
import my from './my';

export const rootReducer = combineReducers({
	register,
  login,
  token,
  my,
	form: formReducer
})
