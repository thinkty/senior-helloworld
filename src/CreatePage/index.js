import React, { Component } from 'react';
import { Layout, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import AttachFilePage from './AttachFilePage';
import EditorPage from './EditorPage';

const attachFileMethod = "파일 첨부하기";
const useEditorMethod = "에디터로 작성하기"
const methods = [attachFileMethod, useEditorMethod];

/**
 * This page allows user to upload a markdown file or use the editor to create a
 * guide.
 */
export default class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedMethod: '' };
  }

  /**
   * Method called when user selects a method
   */
  selectMethod = (event) => {
    // I am using innertext instead of id as sometimes, the text gets pressed
    // instead of the button. It might be a bug in the framework but not sure if
    // it is intended.
    this.setState({ selectedMethod: event.target.innerText });
  }

  /**
   * Method to cancel the currently selected method
   */
  onCancel = () => {
    this.setState({ selectedMethod: '' });
  }

  render() {
    const { selectedMethod } = this.state;

    if (selectedMethod === attachFileMethod) {
      return <AttachFilePage onCancel={this.onCancel} />;
    } else if (selectedMethod === useEditorMethod) {
      return <EditorPage onCancel={this.onCancel} />;
    }
  
    return (
      <Layout style={{ height: "100vh" }}>
        <Layout.Content>
          <Space
            align="center"
            size="large"
            direction="vertical"
            style={{ width: "100%", marginTop: "45vh" }}
          >
            <h1> 가이드 작성 방법 선택하기 </h1>
            <Space align="center" size="large">
              <Link to="/">
                <Button size="large"> 작성 취소 </Button>
              </Link>
              {
                methods.map((method) => (
                  <Button
                    key={method}
                    onClick={this.selectMethod}
                    size="large"
                    type="primary"
                  >
                    {method}
                  </Button>
                ))
              }
            </Space>
          </Space>
        </Layout.Content>
      </Layout>
    );
  }
}
