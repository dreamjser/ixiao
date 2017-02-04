import usersApi from '../api/users';

export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const requestRegister = (isFetching) => {
	return {
		type: REQUEST_REGISTER,
		isFetching,
	}
}

export const RESPONSE_REGISTER = 'RESPONSE_REGISTER';
export const responseRegister = (isFetching, data) => {
	return {
		type: RESPONSE_REGISTER,
		isFetching,
		data
	}
}

export const fetchRegister = params => {
	return dispatch => {
		dispatch(requestRegister(true));
		return usersApi.register(params)
			.then(json => dispatch(responseRegister(false, json)))
	}
}
