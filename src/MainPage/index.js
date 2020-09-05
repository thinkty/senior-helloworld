import React, { Component } from "react";
import { Space, Layout } from "antd";
import SearchBox from "./SearchBox";
import Footer from "../Footer";

/**
 * This is main page and the user can use the search bar to search for guides,
 * create guides, or leave a feedback
 */
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
    const vpWidth = window.innerWidth;

    return (
      <Layout style={{ height: "100vh" }}>
        <Layout.Content>
          <Space
            align="center"
            direction="vertical"
            size={0}
            style={{ width: "100%" }}
          >
            <p
              style={{
                fontSize: vpWidth < 1000 ? "10vw" : "4vw",
                marginTop: "3vh",
                marginBottom: 0,
              }}
            >
              시니어 헬로월드
            </p>
            <p
              style={{
                fontSize: vpWidth < 1000 ? "5vw" : "2vw",
                marginBottom: 60,
              }}
            >
              어르신들을 위한 컴퓨터 길잡이
            </p>
            <SearchBox id="searchBox" onSearch={this.onSearch} />
          </Space>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          <Footer />
        </Layout.Footer>
      </Layout>
    );
  }
}
