import types from 'constants/todoActionTypes';

import Immutable from 'immutable';

import initState from 'constants/state';

const {
  ADD_ITEM,
  DELETE_ITEM,
  FILTER_ITEM,
} = types;

const reducers = (state = initState, action) => {
  switch (action.type){
    case ADD_ITEM:
      return [
        text: action.text,
        ...state
      ]

    default:
      return state;
  }
}

export default reducers;
