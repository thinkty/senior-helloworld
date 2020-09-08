import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Space, Spin } from 'antd';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import ResponsiveText from '../components/ResponsiveText';
import { searchGuides } from '../util/guide';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      loading: false,
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
      this.sendQuery(location.state.query);
    }
  }

  /**
   * Function to send a query to the server and get the results
   *
   * @param {string} query Query created by the user
   */
  sendQuery = async (query) => {
    this.setState({ loading: true });
    await searchGuides(query)
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  /**
   * Send query to the server based on the input
   */
  onSearch = (event) => {
    const query = event.target ? event.target.value : event;
    this.setState({ query });
    this.sendQuery(query);
  };

  render() {
    const { query, loading } = this.state;

    return (
      <Layout style={{ height: '100vh' }}>
        <Layout.Content>
          <Space
            align="center"
            direction="vertical"
            size={1}
            style={{ width: '100%', marginTop: 100 }}
          >
            <SearchBox id="searchBox" onSearch={this.onSearch} />
            <ResponsiveText value={`Search: ${query}`} style={{ margin: 20 }} />
            <Spin spinning={loading}>
              <div> TODO: Implement result container </div>
            </Spin>
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
