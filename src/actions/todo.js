import {
	createAction
} from 'redux-actions';

import types from 'constants/todoActionTypes';

const {
  ADD_ITEM,
  DELETE_ITEM,
  FILTER_ITEM,
} = types;

export const addItem = createAction(ADD_ITEM);
export const deleteItem = createAction(DELETE_ITEM);
export const filterItem = createAction(FILTER_ITEM);
