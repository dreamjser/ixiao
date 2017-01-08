import {
	createAction
} from 'redux-actions';

import {
  ADD_ITEM,
  DELETE_ITEM,
  FILTER_ITEM,
  CHANGE_TEXT
} from 'constants/todoActionTypes';

export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    text
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  }
}

export const filterItem = (text) => {
  return {
    type: FILTER_ITEM,
    text
  }
}

export const changeText = (id, text) => {
  return {
    type: CHANGE_TEXT,
    id,
    text
  }
}
