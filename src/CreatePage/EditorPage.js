import React, { Component } from 'react';
import { Button, Layout, message, Space, Row, Col, Input, Divider } from 'antd';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { sendGuide } from '../util/guide';

/**
 * This is a page to use the markdown editor to create a guide
 */
export default class EditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '# 샘플 Markdown\n**Markdown**에 관한 정보는 [여기](https://guides.github.com/features/mastering-markdown/)에서 찾으실 수 있습니다.',
      redirect: null,
    };
  }

  /**
   * Helper method to handle content change
   */
  onChange = (event) => {
    this.setState({ content: event.target.value });
  }

  /**
   * Send the guide to the server. On success, send user back to home screen. On
   * failure, what should I do? TODO:
   */
  sendGuide = async () => {
    const { content } = this.state;
    await sendGuide(content)
      .then(() => {
        message.success('가이드 전송 완료');
        this.setState({ redirect: '/' });
      })
      .catch(() => {
        message.error('가이드 전송 실패');
      });
  }

  render() {
    const { content, redirect } = this.state;
    const { onCancel } = this.props;
    const height = "80vh";

    if (redirect) {
      return <Redirect to={redirect} />;
    }

    return (
      <Layout style={{ height: "100vh" }}>
        <Layout.Header style={{ backgroundColor: "#fff" }}>
          <Space>
            <Button onClick={onCancel}> 다른 방법 선택하기 </Button>
            <Button type="primary" onClick={this.sendGuide}> 제출하기 </Button>
          </Space>
        </Layout.Header>
        <Layout.Content style={{ padding: 10 }}>
          <Row>
            <Col span={12}>
              <Input.TextArea
                value={content}
                onChange={this.onChange}
                autoFocus
                style={{ height }}
              />
            </Col>
            <Divider type="vertical" style={{ height }} />
            <Col span={11} style={{ height, maxHeight: height, overflowY: "auto" }}>
              <ReactMarkdown source={content} />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    );
  }
}

EditorPage.propTypes = {
  onCancel: PropTypes.func.isRequired,
};
