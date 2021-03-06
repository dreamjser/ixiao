import doRegister from '../api/doRegister';

export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const requestRegister = (isFetching) => ({
  type: REQUEST_REGISTER,
  isFetching,
})

export const RESPONSE_REGISTER = 'RESPONSE_REGISTER';
export const responseRegister = (isFetching, data) => ({
  type: RESPONSE_REGISTER,
  isFetching,
  data
})

export const fetchRegister = params => {
  return dispatch => {
    dispatch(requestRegister(true));
    return doRegister(params)
      .then(json => dispatch(responseRegister(false, json)))
  }
}
