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
export default function ButtonsActions() {
  return (
    <div className="buttons-container">
      <Button style={principalButton} variant="contained">new jokes</Button>
      <div className="buttons-container_child">
        <Button style={stylesButtons} variant="contained"><ThumbUpIcon /></Button>
        <Button style={stylesButtons} variant="contained"><ThumbDownAltIcon /></Button>
      </div>
    </div>
  );
}
