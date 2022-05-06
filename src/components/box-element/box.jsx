/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Style from '../../models/styles.model';
import BoxElement from './box/box-element';

const boxColor = new Style(
  'black',
  255,
  255,
);
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createRandomColor() {
  const red = randomInteger(0, 255);
  const green = randomInteger(0, 255);
  const blue = randomInteger(0, 255);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return new Style(color, 255, 255);
}
function defaultColor() {
  return new Style('black', 255, 255);
}

function Box() {
  const [color, setColor] = useState(boxColor);
  const [mouse, setMouse] = useState('');
  const mouseEvents = {
    enter: () => setColor(createRandomColor()),
    leaver: () => setColor(defaultColor()),
    double: () => setColor(defaultColor()),
  };
  useEffect(() => {
    // eslint-disable-next-line no-console
    mouse && mouseEvents[mouse]();
  }, [mouse]);

  return (
    <BoxElement
      background={color}
      setterMouse={setMouse}
    />
  );
}

export default Box;
