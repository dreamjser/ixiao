import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './todoHeader';
import TodoList from './todoList';

class Todo extends Component{
  render(){
    const {list, onAddItem} = this.props;

    return (
      <div>
        <TodoHeader onAddItem={onAddItem}/>
        <TodoList list={list}/>
      </div>
    )
  }
}

export default Todo;
