import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Space } from 'antd';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  /**
   * Get the query if it exists. If redirecting from MainPage, the state should
   * be defined. If not, the state will be undefined.
   */
  componentDidMount() {
    const { location } = this.props;

    if (location && location.state && location.state.query !== '') {
      this.setState({ query: location.state.query });
    }
  }

  /**
   * Send query to the server based on the input
   */
  onSearch = (event) => {
    // const query = event.target ? event.target.value : event;
  };

  render() {
    const { query } = this.state;

    return (
      <Layout style={{ height: '100vh' }}>
        <Layout.Content>
          <Space
            align="center"
            direction="vertical"
            size={0}
            style={{ width: '100%', marginTop: 100 }}
          >
            <SearchBox id="searchBox" onSearch={this.onSearch} />
          </Space>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          <Footer />
        </Layout.Footer>
      </Layout>
    );
  }
}

SearchPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ query: PropTypes.string.isRequired }),
  }),
};

SearchPage.defaultProps = {
  location: PropTypes.shape({
    state: PropTypes.shape({ query: '' }),
  }),
};
