import {
  ADD_ITEM,
  DELETE_ITEM,
  FILTER_ITEM,
} from 'constants/todoActionTypes';

import Immutable from 'immutable';
import initState from 'constants/state';

const reducers = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        todos: [{
            text: action.text,
          },
          ...state.todos
        ]
      }

    default:
      return state;
  }
}

export default reducers;
