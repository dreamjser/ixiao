import fetch from 'isomorphic-fetch';

import {
	createAction
} from 'redux-actions';

import {
  ADD_ITEM,
  DELETE_ITEM,
  FILTER_ITEM,
  CHANGE_TEXT,
  REQUEST_LIST,
  RECEIVE_LIST
} from 'constants/todoActionTypes';

export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    text
  }
}

export const requestList = (isFetching) => {
  return {
    type: REQUEST_LIST,
    isFetching,
  }
}

export const receiveList = (isFetching, list) => {
  return {
    type: RECEIVE_LIST,
    isFetching,
    list
  }
}

export const fetchList = () => {
  return dispatch => {
    dispatch(requestList(true));
    return fetch('/data.json')
      .then(response => response.json())
      .then(json => dispatch(receiveList(false, json)))
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
