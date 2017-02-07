import {
	combineReducers
} from 'redux';
import {
	reducer as formReducer
} from 'redux-form';
import register from './register';
import login from './login';
import token from './token';

export const rootReducer = combineReducers({
	register,
  login,
  token,
	form: formReducer
})
