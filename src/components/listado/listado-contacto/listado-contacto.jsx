import PropTypes from 'prop-types';
import React from 'react';
import Contacto from '../../../models/contacto.model';
import './styles.css';

function ListadoContacto({ contacto, eliminarContacto, conectar }) {
  const {
    id, nombre, apellido, estado,
  } = contacto;
  const setEstado = () => (estado ? 'Conectado' : 'Desconectado');
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {`${nombre} ${apellido} se encuentra ${setEstado()}`}
              <button className="margin_left" type="button" onClick={() => eliminarContacto(id)}>Eliminar</button>
              <button type="button" onClick={() => conectar(contacto)}>Conectar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListadoContacto;

ListadoContacto.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
  eliminarContacto: PropTypes.func.isRequired,
  conectar: PropTypes.func.isRequired,
};
