import React, { useState } from 'react';
import uuid from 'react-uuid';
import Contacto from '../../models/contacto.model';
import { CrearContacto } from './crear-contacto-modal/crearContacto';
import ListadoContacto from './listado-contacto/listado-contacto';

function Listado() {
  const cont1 = new Contacto('1', 'Lucas', 'Martínez', false);
  const cont2 = new Contacto('2', 'Alex', 'Sequeiro', false);
  const conts = [cont1, cont2];
  const [contact, setContacto] = useState(conts);
  const [open, setOpen] = useState(false);

  const openModal = (isOpen) => {
    setOpen(isOpen);
  };
  const crearContacto = (contacto) => {
    setContacto([...contact, contacto]);
  };
  const eliminarContacto = (id) => {
    setContacto(contact.filter((value) => value.id !== id));
  };
  const conectarContacto = (contacto) => {
    const index = contact.indexOf(contacto);
    const cnt = [...contact];
    cnt[index].estado = !cnt[index].estado;
    setContacto(cnt);
  };

  return (
    <>
      { contact.map((linea) => (
        <ListadoContacto
          key={uuid()}
          contacto={linea}
          eliminarContacto={eliminarContacto}
          conectar={conectarContacto}
        />
      ))}
      <button onClick={() => openModal(true)} type="button">Crear contacto</button>
      <CrearContacto
        isOpen={open}
        setContacto={crearContacto}
        openModal={openModal}
      />
    </>
  );
}

export default Listado;
