import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

/**
 * This is a text input component used in main page and search page for
 * searching guides
 */
export default function SearchBox(props) {
  const { onSearch, id } = props;

  return (
    <Input.Search
      id={id}
      onSearch={onSearch}
      onPressEnter={onSearch}
      size="large"
      placeholder="검색 시작하기"
      enterButton="검색하기"
      autoFocus
      style={{ width: '95vw', maxWidth: '500px' }}
    />
  );
}

SearchBox.propTypes = {
  id: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
