import {
	combineReducers
} from 'redux';
import {
	reducer as formReducer
} from 'redux-form';
import register from './register';
import token from './token';

export const rootReducer = combineReducers({
	register,
  token,
	form: formReducer
})
