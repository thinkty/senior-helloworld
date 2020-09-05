import React, { Component } from 'react';

/**
 * This is a page to use the markdown editor to create a guide
 */
export default class EditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <div>
        Edit guide
      </div>
    )
  }
}
