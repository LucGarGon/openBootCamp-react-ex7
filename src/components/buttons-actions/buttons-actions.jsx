/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from '@mui/material';
import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import './button-actions.css';

const stylesButtons = {
  margin: '2%',
};
const principalButton = {
  width: '100%',
  display: 'block',
};
export default function ButtonsActions({ postivePunt, negativePunt, evento }) {
  const puntuarPos = () => (postivePunt(1));
  const puntuarNeg = () => (negativePunt(1));
  const callEvent = () => (evento(true));
  return (
    <div className="buttons-container">
      <Button style={principalButton} variant="contained" onClick={callEvent}>generar jokes</Button>
      <div className="buttons-container_child">
        <Button style={stylesButtons} variant="contained" onClick={puntuarPos}><ThumbUpIcon /></Button>
        <Button style={stylesButtons} variant="contained" onClick={puntuarNeg}><ThumbDownAltIcon /></Button>
      </div>
    </div>
  );
}
