import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import TodoHeader from './todoHeader';
import TodoList from './todoList';

import {
  addItem,
  fetchList,
} from 'actions/todo';

class Todo extends Component{
  componentWillMount(){
    const {onRequestList} = this.props;
    onRequestList();
  }
  render(){
    const {list, onAddItem} = this.props;

    return (
      <div>
        <TodoHeader onAddItem={onAddItem}/>
        {
          list &&
          <TodoList list={list}/>
        }

      </div>
    )
  }
}

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
