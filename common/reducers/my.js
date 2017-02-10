import {
  REQUEST_MY,
  RESPONSE_MY,
} from '../actions/my';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case REQUEST_MY:
  case RESPONSE_MY:
    return {
      data: action.data,
      isFetching: action.isFetching
    }

  default:
    return state;
  }
}

export default reducer;
