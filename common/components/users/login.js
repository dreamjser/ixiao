import './style.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Login extends Component{
  render(){
    return (
      <div className="users">
        <menu>
          <Link to="/login" className="active"><span>登录</span></Link>
          <Link to="/register"><span>注册</span></Link>
        </menu>
        <div className="users-form">
          <div className="users-item">
            <i className="iconfont icon-my"></i>
            <input type="text"/>
          </div>
          <div className="users-item">
            <i className="iconfont icon-password"></i>
            <input type="text"/>
          </div>
          <div className="users-submit">
            <a href="javascript:;" className="btn">登录</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
