import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TodoList extends Component{
  render(){
    const { list } = this.props;

    return (
      <div>
        <ul>
        {
          list.map((item, index) => (
            <li key={index}>
              {item.text}
            </li>
          ))
        }
        </ul>
      </div>
    )
  }
}

export default TodoList;
