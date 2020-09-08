import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component displays text in a responsive font size
 */
export default function ResponsiveText(props) {
  const {
    breakpoint, small, big, value, style,
  } = props;
  const fontSize = window.innerWidth > breakpoint ? big : small;

  return (
    <p style={{ ...style, fontSize }}>
      {
        value
      }
    </p>
  );
}

ResponsiveText.propTypes = {
  breakpoint: PropTypes.number,
  small: PropTypes.string,
  big: PropTypes.string,
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
};

ResponsiveText.defaultProps = {
  breakpoint: 1000,
  small: '5vw',
  big: '2vw',
  style: {},
};
