import React, { Component } from 'react';
import {
  Layout, Space, Input, Button, message,
} from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { send } from '../util/feedback';

/**
 * This is the feedback page where the user can leave a feedback
 */
export default class FeedbackPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
      redirect: false,
    };
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
    const { feedback } = this.state;
    send(feedback)
      .then((response) => {
        const { status } = response;
        if (status === 200) {
          message.info('Feedback sent', 3);

          setTimeout(() => {
            this.setState({ redirect: true });
          }, 3000);
        } else {
          message.error('Failed to send feedback', 3);
        }
      })
      .catch(() => {
        message.error('[ERROR] Failed to send feedback', 3);
      });
  }

  render() {
    const { feedback, redirect } = this.state;

    if (redirect) {
      return (
        <Redirect push from="/feedback" to="/" />
      );
    }

    return (
      <Layout style={{ height: '100vh' }}>
        <Layout.Content>
          <Space
            align="center"
            direction="vertical"
            style={{ width: '100%' }}
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
              style={{ width: '90vw', height: '70vh', fontSize: 30 }}
            />
          </Space>
        </Layout.Content>
      </Layout>
    );
  }
}
