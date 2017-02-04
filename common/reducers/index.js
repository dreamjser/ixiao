import {
	combineReducers
} from 'redux';
import {
	reducer as formReducer
} from 'redux-form';
import register from './register';

export const rootReducer = combineReducers({
	register,
	form: formReducer
})
