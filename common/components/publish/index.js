import './style.scss';

import React, {
  Component
} from 'react';

import {
  Editor,
  EditorState,
  RichUtils
} from 'draft-js';

class Publish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => this.setState({
      editorState
    });
  }
  render() {
    return (
      <div className="publish">
        <h1>发布笑话</h1>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default Publish;
