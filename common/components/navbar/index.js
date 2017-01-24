import './index.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Navbar extends Component{
  render(){
    return (
      <ul className="navbar">
        <li>
          <i className="iconfont icon-home"></i>
          <Link to="/home">首页</Link>
        </li>

      </ul>
    )
  }
}

export default Navbar;
