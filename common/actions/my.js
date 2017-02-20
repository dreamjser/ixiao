import doLogout from '../api/doLogout';

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const requestLogout = (isFetching) => ({
  type: REQUEST_LOGOUT,
  isFetching
});

export const RESPONSE_LOGOUT = 'RESPONSE_LOGOUT';
export const responseLogout = (isFetching, data) => ({
  type: RESPONSE_LOGOUT,
  isFetching,
  data
})

export const fetchLogout = () => {
  return dispatch => {
    dispatch(requestLogout(true));
    return doLogout()
      .then(json => dispatch(responseLogout(false, json)));
  }
}
