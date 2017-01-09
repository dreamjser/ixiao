import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TodoHeader extends Component{
  constructor(){
    super();
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(){
    let value = this.refs.text.value;
    const {onAddItem} = this.props;
    onAddItem(value);
  }

  render(){
    return (
      <div>
        <h1>666 fff</h1>
        <input type="text" ref='text' />
        <button onClick={this.handleAddItem}>add</button>
      </div>
    )
  }
}

export default TodoHeader;
