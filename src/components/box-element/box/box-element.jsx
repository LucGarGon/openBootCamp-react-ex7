/* eslint-disable no-console */
import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Style from '../../../models/styles.model';

function BoxElement({ background, setterMouse }) {
  // eslint-disable-next-line no-console

  return (
    <div
      style={background}
      onMouseEnter={() => setterMouse('enter')}
      onMouseLeave={() => setterMouse('leaver')}
      onDoubleClick={() => setterMouse('double')}
    />
  );
}

export default BoxElement;

BoxElement.propTypes = {
  background: PropTypes.instanceOf(Style).isRequired,
  setterMouse: PropTypes.func.isRequired,
};
