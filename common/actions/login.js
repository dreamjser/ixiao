import doLogin from '../api/doLogin';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const requestLogin = (isFetching) => {
  return {
    type: REQUEST_LOGIN,
    isFetching,
  }
}

export const RESPONSE_LOGIN = 'RESPONSE_LOGIN';
export const responseLogin = (isFetching, data) => {
  return {
    type: RESPONSE_LOGIN,
    isFetching,
    data
  }
}

export const fetchLogin = params => {
  return dispatch => {
    dispatch(requestLogin(true));
    return doLogin(params)
      .then(json => dispatch(responseLogin(false, json)))
  }
}
