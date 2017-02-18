import {
  REQUEST_LOGOUT,
  RESPONSE_LOGOUT,
} from '../actions/my';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case REQUEST_LOGOUT:
  case RESPONSE_LOGOUT:
    return {
      data: action.data,
      isFetching: action.isFetching
    }

  default:
    return state;
  }
}

export default reducer;
