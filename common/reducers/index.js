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
import publish from './publish';

export const rootReducer = combineReducers({
	register,
  login,
  token,
  my,
  publish,
	form: formReducer
})
