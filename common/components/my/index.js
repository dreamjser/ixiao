import './style.scss';

import cookie from 'react-cookie';
import React, {
  Component
} from 'react';

import {
  Link
} from 'react-router';

import Preloading from '../preloading';

const headUrl = '//upload.dreamjser.com/images/20170217/1487310478.png';

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
      doLogout
    } = this.props;

    const myData = cookie.load('data');

    return (
      <div className="my">
        <div className="my-container">
          <div className="my-head">
            <div className="head-box">
              <img src={headUrl} alt=""/>
              {
                !myData &&
                <Link to="login"></Link>
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
              <button className="btn">退出</button>
            </div>
          }
        </div>
      </div>
    )
  }
}
export default My;
