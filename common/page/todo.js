import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Todo from 'components/todo';

class TodoPage extends Component{
  render(){
    return (
      <div>
        this is TodoPage page
        <Todo/>
      </div>
    )
  }
}

export default TodoPage;
