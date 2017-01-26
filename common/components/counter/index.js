import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../navbar';

class Counter extends Component{
  render(){
    const pathname = this.props.location.pathname;
    return (
      <div>
        counter 222
        <Navbar pathname = {pathname} />
      </div>
    )
  }
}

export default Counter;
