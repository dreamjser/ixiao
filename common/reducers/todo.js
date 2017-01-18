import {
  ADD_ITEM,
  REQUEST_LIST,
  RECEIVE_LIST,
} from '../actions/todo';

const reducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        todos: [{
            text: action.text,
          },
          ...state.todos
        ]
      }
    case REQUEST_LIST:
    case RECEIVE_LIST:
      return {
        todos: action.list,
        isFetching: action.isFetching
      }
    default:
      return state;
  }
}

export default reducers;
