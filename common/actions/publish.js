export const REQUEST_JOKE = 'REQUEST_JOKE';
export const requestJoke = (isFetching) => ({
  isFetching
});

export const RESPONSE_JOKE = 'REQUEST_JOKE';
export const responseJoke = (isFetching, data) => ({
  isFetching,
  data
});
