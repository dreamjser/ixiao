import {
	REQUEST_REGISTER,
	RESPONSE_REGISTER,
} from '../actions/register';

const reducer = (state = {}, action) => {
	switch (action.type) {
	case REQUEST_REGISTER:
	case RESPONSE_REGISTER:
		return {
			data: action.data,
			isFetching: action.isFetching
		}

	default:
		return state;
	}
}

export default reducer;
