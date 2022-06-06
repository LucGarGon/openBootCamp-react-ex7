/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import ButtonsActions from '../../components/buttons-actions/buttons-actions';
import ContainerJokes from '../../components/container-jokes/container-jokes';
import ContainerPuntuation from '../../components/container-puntuation/container-puntuation';
import getRandomJoke from '../../services/random-joke.service';
import './chuck-jokes.styles.css';

export default function ChuckJokes() {
  const [puntuationPos, setPuntuationPos] = useState(0);

  const positiveScore = (point) => {
    const resultado = point + puntuationPos;
    setPuntuationPos(resultado);
  };
  const [puntuationNeg, setPuntuationNeg] = useState(0);
  const [joke, setJoke] = useState('');
  const [event, IsEvent] = useState(false);
  const negativeScore = (point) => {
    const resultado = point + puntuationNeg;
    setPuntuationNeg(resultado);
  };
  useEffect(() => {
    event && getRandomJoke().then(
      (respuesta) => {
        console.log('res', respuesta);
        if (respuesta.status === 200) {
          setJoke(respuesta.data.value);
        }
        return null;
      },
    );
    IsEvent(false);
  }, [event]);
  return (
    <>
      <div className="container_actions-jokes">
        <ButtonsActions postivePunt={positiveScore} negativePunt={negativeScore} evento={IsEvent} />
        <ContainerPuntuation finalScorePos={puntuationPos} finalScoreNeg={puntuationNeg} />
      </div>
      <ContainerJokes jokes={joke} />
    </>
  );
}
