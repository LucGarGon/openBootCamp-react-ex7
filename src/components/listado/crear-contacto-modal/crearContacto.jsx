import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import uuid from 'react-uuid';

export function CrearContacto({ isOpen, setContacto, openModal }) {
  const isHiddenStyle = isOpen ? 'isVisible' : 'isHidden';

  const nombre = useRef(null);
  const apellido = useRef(null);

  const makeContacto = () => (setContacto({
    id: uuid(),
    nombre: nombre.current.value,
    apellido: apellido.current.value,
    estado: false,
  }));
  return (
    <div className={isHiddenStyle}>
      <div>
        <label htmlFor="nombre">
          Nombre
          <input id="nombre" name="nombre" type="text" ref={nombre} />
        </label>
        <label htmlFor="apellido">
          apellido
          <input id="apellido" name="apellido" type="text" ref={apellido} />
        </label>
      </div>
      <div className="container_buttons">
        <button type="button" onClick={() => openModal(false)}>Cancelar</button>
        <button type="button" onClick={makeContacto}>Crear</button>
      </div>
    </div>
  );
}

export default CrearContacto;

CrearContacto.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setContacto: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
