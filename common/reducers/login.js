import {
  REQUEST_LOGIN,
  RESPONSE_LOGIN,
} from '../actions/login';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case REQUEST_LOGIN:
  case RESPONSE_LOGIN:
    return {
      data: action.data,
      isFetching: action.isFetching
    }

  default:
    return state;
  }
}

export default reducer;
