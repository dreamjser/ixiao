import './style.scss';

import React, {
  Component
} from 'react';

import {
  Link
} from 'react-router';

import {
  Editor,
  EditorState,
  RichUtils
} from 'draft-js';

import {
  stateToHTML
} from 'draft-js-export-html';

import cookie from 'react-cookie';

class Publish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange(editorState) {
    this.setState({
      editorState
    });
  }

  render() {
    const myData = cookie.load('data');
    return (
      <div className="publish">
        <h1>发布笑话</h1>
        <div className="publish-title">
          <input type="text" placeholder="*请输入标题(20字符以内)"/>
        </div>
        <Editor
          refs="editor"
          editorState={this.state.editorState}
          onChange={this.onChange.bind(this)}
          placeholder="*分享最新最好玩的笑话(500字符以内)"
        />
        <div className="publish-submit">
          {
            myData?
            <button className="btn">提交</button>:
            <Link className="btn" to="/login">登录</Link>
          }
        </div>
      </div>
    );
  }
}

export default Publish;
