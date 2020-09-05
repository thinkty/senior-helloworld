import React, { Component } from 'react';

/**
 * This is a page to upload the guide file (the guide file must be in markdown)
 */
export default class AttachFilePage extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '' }
  }

  render() {
    return (
      <div>
        Attach file
      </div>
    )
  }
}
