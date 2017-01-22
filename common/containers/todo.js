import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Todo from '../components/todo';

import {
  addItem,
  fetchList,
} from '../actions/todo';

// container
function mapStateToProps(state){
  return {
    list: state.todo.todos,
    isFetching: state.todo.isFetching
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAddItem: text => dispatch(addItem(text)),
    onRequestList: () => dispatch(fetchList())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

