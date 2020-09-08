import React, { Component } from 'react';
import { Space, Layout } from 'antd';
import { Redirect } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import ResponsiveText from '../components/ResponsiveText';

/**
 * This is main page where the user can search for guides, or click on a link to
 * create guides, or leave a feedback
 */
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  /**
   * Method called when search clicked
   */
  onSearch = (event) => {
    const query = event.target ? event.target.value : event;
    this.setState({ query });
  };

  render() {
    const { query } = this.state;

    if (query !== '') {
      return (
        <Redirect
          push
          from="/"
          to={{ pathname: '/search', state: { query } }}
        />
      );
    }

    return (
      <Layout style={{ height: '100vh' }}>
        <Layout.Content>
          <Space
            align="center"
            direction="vertical"
            size={0}
            style={{ width: '100%' }}
          >
            <ResponsiveText
              value="시니어 헬로월드"
              big="4vw"
              small="10vw"
              style={{ marginTop: '3vh', marginBottom: 0 }}
            />
            <ResponsiveText
              value="어르신들을 위한 컴퓨터 길잡이"
              big="2vw"
              small="5vw"
              style={{ marginBottom: 60 }}
            />
            <SearchBox id="mainSearchBox" onSearch={this.onSearch} />
          </Space>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          <Footer />
        </Layout.Footer>
      </Layout>
    );
  }
}
