import addJoke from '../api/addJoke';

export const REQUEST_JOKE = 'REQUEST_JOKE';
export const requestJoke = (isFetching) => ({
  type: REQUEST_JOKE,
  isFetching
});

export const RESPONSE_JOKE = 'RESPONSE_JOKE';
export const responseJoke = (isFetching, data) => ({
  type: RESPONSE_JOKE,
  isFetching,
  data
});

export const fetchJoke = params => {
  return dispatch => {
    dispatch(requestJoke(true));
    return addJoke(params)
      .then(json => dispatch(responseJoke(false, json)));
  }
}
