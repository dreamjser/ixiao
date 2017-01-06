import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from 'containers/todoHeader';
import TodoList from 'containers/todoList';

class App extends Component{

  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
      </div>
    )
  }
}

export default App;
