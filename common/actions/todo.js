import {getList} from '../api/getlist';

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    text
  }
}

export const REQUEST_LIST = 'REQUEST_LIST';
export const requestList = (isFetching) => {
  return {
    type: REQUEST_LIST,
    isFetching,
  }
}

export const RECEIVE_LIST = 'RECEIVE_LIST';
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
    return getList()
      .then(json => dispatch(receiveList(false, json)))
  }
}
