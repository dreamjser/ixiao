import {
	REQUEST_REGISTER,
	RESPONSE_REGISTER,
} from '../actions/register';

import {
  REQUEST_TOKEN
} from '../actions/token';

const reducer = (state = {}, action) => {
	switch (action.type) {
  case REQUEST_TOKEN:
    return {
      token: action.token
    }

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
