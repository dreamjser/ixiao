import './style.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Navbar extends Component{
  render(){
    const setTagClass = {};
    const {pathname} = this.props;

    setTagClass[pathname] = 'active';

    return (
      <nav className="navbar">
        <ul>
          <li className={setTagClass['/'] || ''}>
            <Link to="/">
              <i className="iconfont icon-home"></i>
              <p>首页</p>
            </Link>
          </li>
          <li className={setTagClass['/counter'] || ''}>
            <Link to="/counter">
              <i className="iconfont icon-guide"></i>
              <p>发现</p>
            </Link>
          </li>
          <li className={setTagClass['/publish'] || ''}>
            <Link to="/publish">
              <i className="iconfont icon-edit"></i>
              <p>发布</p>
            </Link>
          </li>
          <li className={setTagClass['/my'] || ''}>
            <Link to="/my">
              <i className="iconfont icon-my"></i>
              <p>我的</p>
            </Link>
          </li>
        </ul>
      </nav>

    )
  }
}

export default Navbar;
