import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TodoHeader extends Component{
  render(){
    const {onAddItem} = this.props;
    console.log(this.props)
    return (
      <div>
        <h1>TodoHeader</h1>
        <input type="text" />
        <button onClick={onAddItem}>add</button>
      </div>
    )
  }
}

export default TodoHeader;
