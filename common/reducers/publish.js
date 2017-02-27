import {
  REQUEST_JOKE,
  RESPONSE_JOKE,
} from '../actions/publish';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case REQUEST_JOKE:
  case RESPONSE_JOKE:
    return {
      data: action.data,
      isFetching: action.isFetching
    }

  default:
    return state;
  }
}

export default reducer;
