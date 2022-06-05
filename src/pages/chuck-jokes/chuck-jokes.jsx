import React from 'react';
import ButtonsActions from '../../components/buttons-actions/buttons-actions';
import ContainerPuntuation from '../../components/container-puntuation/container-puntuation';
import './chuck-jokes.styles.css';

export default function ChuckJokes() {
  return (
    <div className="container_jokes">
      <ButtonsActions />
      <ContainerPuntuation />
    </div>
  );
}
