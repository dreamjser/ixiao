import getToken from '../api/getToken';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const requestToken = (data) => {
  return {
    type: REQUEST_TOKEN,
    data
  }
}

export const fetchToken = () => {
  return dispatch => {
    return getToken()
      .then(json => dispatch(requestToken(json)));
  }
}
