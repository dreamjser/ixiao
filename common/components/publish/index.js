import './style.scss';

import React, {
  Component
} from 'react';

import {
  Editor,
  EditorState,
  RichUtils
} from 'draft-js';

import {
  stateToHTML
} from 'draft-js-export-html';

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
    return (
      <div className="publish">
        <h1>发布笑话</h1>
        <Editor
          refs="editor"
          editorState={this.state.editorState}
          onChange={this.onChange.bind(this)}
          placeholder="分享最新最好玩的笑话~"
        />
        <div className="publish-submit">
          <button className="btn">提交</button>
        </div>
      </div>
    );
  }
}

export default Publish;
