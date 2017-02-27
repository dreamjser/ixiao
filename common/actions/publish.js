import addJoke from '../api/addJoke';

export const REQUEST_JOKE = 'REQUEST_JOKE';
export const requestJoke = (isFetching) => ({
  isFetching
});

export const RESPONSE_JOKE = 'REQUEST_JOKE';
export const responseJoke = (isFetching, data) => ({
  isFetching,
  data
});

export const fetchJoke = (params) => {
  return dispatch => {
    dispatch(requestJoke(true));
    return addJoke(params)
      .then(json => dispatch(responseJoke(false, json)));
  }
}
