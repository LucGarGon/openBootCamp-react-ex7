export default class Contacto {
  id = '';

  nombre = '';

  apellido = '';

  estado = false;

  constructor(id, nombre, apellido, estado) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.estado = estado;
  }
}
