import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Navbar extends Component{
  render(){
    return (
      <div>
        <Link to="/todo">todo</Link>
        <Link to="/counter">counter</Link>
      </div>
    )
  }
}

export default Navbar;
