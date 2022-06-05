import React from 'react';
import { Button } from '@mui/material';
import './container-puntuacion.style.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export default function ContainerPuntuation() {
  return (
    <div className="container_puntuation">
      <p>
        <Button>
          <ThumbUpIcon />
        </Button>
      </p>
      <p>
        <Button>
          <ThumbDownAltIcon />
        </Button>
      </p>
    </div>
  );
}
