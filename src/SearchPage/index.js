import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from '../components/SearchBox';

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
  onSearch = () => {

  }

  render() {
    const { query } = this.state;

    return (
      <div>
        <div>
          {query}
        </div>
        <SearchBox id="searchBox" onSearch={this.onSearch} />
      </div>
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
