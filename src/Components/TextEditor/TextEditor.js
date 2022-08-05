import React, { Component } from "react";
import { convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "./index.scss";
//import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

/* Editor de texto */
const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

export class TextEditor extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
    };
  }

  onContentStateChange = (contentState) => {
    this.setState({
      contentState,
    });
  };

  render() {
    const { contentState } = this.state;
    return (
      <>
        <div className="windows">
          <div className="window"><p>Tab 1</p></div>
          <div className="window"><p>Tab 2</p></div>
          <div className="window"><p>Tab 3</p></div>
          <div className="window"><p>Tab 4</p></div>
          <div className="window"><p>Tab 5</p></div>
          <div className="window"><p>Tab 6</p></div>
        </div>

        <div className="contente">
        <section className="editor">
          <div>
            <Editor
              wrapperClassName="wrapper-class"
              editorClassName="demo-editor"
              onContentStateChange={this.onContentStateChange}
            />
          </div>
        </section>
        </div>
      </>
    );
  }
}
