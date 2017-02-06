import {
  REQUEST_TOKEN
} from '../actions/token';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return {
        data: action.data
      }
    default:
      return state;
  }
}

export default reducer;
