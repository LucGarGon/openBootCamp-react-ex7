/* eslint-disable react/prop-types */
import React from 'react';
import './container-jokes.styles.css';

export default function ContainerJokes({ jokes }) {
  return (
    <div className="container_jokes">
      {jokes}

    </div>
  );
}
