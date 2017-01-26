import './index.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Navbar extends Component{
  render(){
    return (
      <ul className="navbar">
        <li className="active">
          <Link to="/">
            <i className="iconfont icon-home"></i>
            <p>首页</p>
          </Link>
        </li>
        <li>
          <Link to="/discover">
            <i className="iconfont icon-guide"></i>
            <p>发现</p>
          </Link>
        </li>
        <li>
          <Link to="/publish">
            <i className="iconfont icon-edit"></i>
            <p>发布</p>
          </Link>
        </li>
        <li>
          <Link to="/my">
            <i className="iconfont icon-my"></i>
            <p>我的</p>
          </Link>
        </li>
      </ul>
    )
  }
}

export default Navbar;
