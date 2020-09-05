import React, { Component } from 'react';
import { Layout, Space, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

/**
 * This is the feedback page where the user can leave a feedback
 */
export default class FeedbackPage extends Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '' };
  }

  /**
   * Helper method to update feedback on key press
   */
  onChange = (event) => {
    this.setState({ feedback: event.target.value });
  }

  /**
   * Method to send feedback to server
   */
  submitFeedback = () => {
    // TODO: Send feedback to server
  }

  render() {
    const { feedback } = this.state;

    return (
      <Layout style={{ height: "100vh" }}>
        <Layout.Content>
          <Space
            align="center"
            direction="vertical"
            style={{ width: "100%" }}
          >
            <Space align="center" size="large" style={{ margin: 40 }}>
              <Link to="/">
                <Button size="large" type="primary"> 돌아가기 </Button>
              </Link>
              <Button
                size="large"
                type="primary"
                disabled={feedback === ''}
                onClick={this.submitFeedback}
              >
                제출하기
              </Button>
            </Space>
            <Input.TextArea
              value={feedback}
              onChange={this.onChange}
              autoFocus
              rows={18}
              style={{ width: "90vw" }}
            />
          </Space>
        </Layout.Content>
      </Layout>
    );
  }
}
