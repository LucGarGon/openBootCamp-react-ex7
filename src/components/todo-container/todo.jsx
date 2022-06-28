/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Todo({
  onClick, completed, text, id,
}) {
  return (
    <li
      onClick={onClick}
      style={
        {
          textDecoration: completed ? 'line-through' : 'none',
          textDecorationColor: completed ? 'green' : 'none',
          color: completed ? 'green' : 'white',
        }
    }
    >
      {id}
      {' '}
      -
      {' '}
      {text}

    </li>
  );
}
