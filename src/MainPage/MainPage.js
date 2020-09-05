import React, { Component } from "react";
import { Space } from "antd";
import SearchBox from "./SearchBox";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Method called when search clicked
   */
  onSearch = (event) => {
    const value = event.target ? event.target.value : event;
    console.log(value);
  };

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Space
          align="center"
          direction="vertical"
          style={{ width: "100%", height: "100%" }}
        >
          <SearchBox id="searchBox" onSearch={this.onSearch} />
        </Space>
      </div>
    );
  }
}
