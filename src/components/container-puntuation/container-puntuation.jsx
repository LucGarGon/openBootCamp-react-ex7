/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from '@mui/material';
import './container-puntuacion.style.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export default function ContainerPuntuation({ finalScorePos, finalScoreNeg }) {
  return (
    <div className="container_puntuation">
      <h6>Puntuación</h6>
      <p>
        <Button>
          <ThumbUpIcon />
          { finalScorePos }
        </Button>
      </p>
      <p>
        <Button>
          <ThumbDownAltIcon />
          { finalScoreNeg }
        </Button>
      </p>
    </div>
  );
}
