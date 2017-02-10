import getUserInfo from '../api/getUserInfo';

export const REQUEST_MY = 'REQUEST_MY';
export const requestMy = (isFetching) => ({
  type: REQUEST_MY,
  isFetching
});

export const RESPONSE_MY = 'RESPONSE_MY';
export const responseMy = (isFetching, data) => ({
  type: RESPONSE_MY,
  isFetching,
  data
})

export const fetchMy = () => {
  return dispatch => {
    dispatch(requestMy(true));
    return getUserInfo()
      .then(json => dispatch(responseMy(false, json)));
  }
}
