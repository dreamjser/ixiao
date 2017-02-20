import './style.scss';

import cookie from 'react-cookie';
import React, {
  Component
} from 'react';

import {
  Link
} from 'react-router';

import Preloading from '../preloading';

const getUrl = (url, myData) => {
  const loginUrl = '/login';

  if (!myData) {
    url = loginUrl;
  }

  return url;
}

class My extends Component {
  render() {
    const {
      isFetching,
      onLogout
    } = this.props;

    const myData = cookie.load('data');

    return (
      <div className="my">
        <div className="my-container">
          <div className="my-head">
            <div className="head-box">
              {
                myData?
                <div className="head-icon">{myData.nickname.substring(0,1)}</div>:
                <div>
                  <div className="head-bg"></div>
                  <Link to="login"></Link>
                </div>
              }

              <p>
                {myData? myData.nickname: '点击头像登录'}
              </p>
            </div>
          </div>
          <ul className="my-list">
            <li>
              <Link to={getUrl('/mypublish', myData)}>
                <i className="iconfont icon-edit"></i>
                我的发布
                <i className="iconfont icon-more"></i>
              </Link>
            </li>
            <li>
              <Link to={getUrl('/mycollect', myData)}>
                <i className="iconfont icon-collection"></i>
                我的收藏
                <i className="iconfont icon-more"></i>
              </Link>
            </li>
            <li>
              <Link to={getUrl('/mycomment', myData)}>
                <i className="iconfont icon-news"></i>
                我的评论
                <i className="iconfont icon-more"></i>
              </Link>
            </li>
          </ul>
          {
            myData &&
            <div className="my-logout">
              <button className="btn" onClick={onLogout}>退出</button>
            </div>
          }
        </div>
      </div>
    )
  }
}
export default My;
