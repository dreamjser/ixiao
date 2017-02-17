import './style.scss';

import React, {
  Component
} from 'react';

import {
  Link
} from 'react-router';

const headUrl = 'http://upload.dreamjser.com/images/20170217/1487310478.png';

const getUrl = (url, code) => {
  const loginUrl = '/login';

  if(code !== 0){
    url = loginUrl;
  }

  return url;
}

class My extends Component{
  componentDidMount(){
    this.props.getUserInfo();
  }

  render(){
    const {
      data,
      isFetching
    } = this.props;

    const code = data? data.code: -1;

    return (
      <div className="my">
        <div className="my-head">
          {
            data && code === 0 &&
              (
                <div className="head-box">
                  <img src={headUrl} alt=""/>
                  <p>{data.data.nickname}</p>
                </div>
              )
          }
          {
            data && code !== 0 &&
              (
                <Link className="head-box" to="/login">
                  <img src={headUrl} alt=""/>
                  <p>点击头像登录</p>
                </Link>
              )
          }
        </div>
        <ul className="my-list">
          <li>
            <Link to={getUrl('/mypublish', code)}>
              <i className="iconfont icon-edit"></i>
              我的发布
              <i className="iconfont icon-more"></i>
            </Link>
          </li>
          <li>
            <Link to={getUrl('/mycollect', code)}>
              <i className="iconfont icon-collection"></i>
              我的收藏
              <i className="iconfont icon-more"></i>
            </Link>
          </li>
          <li>
            <Link to={getUrl('/mycomment', code)}>
              <i className="iconfont icon-news"></i>
              我的评论
              <i className="iconfont icon-more"></i>
            </Link>
          </li>
        </ul>
        {
          data && data.code === 0 &&
          <div className="my-logout">
            <button className="btn">退出</button>
          </div>
        }
      </div>
    )
  }
}

export default My;
