import Roles from './user.enum';

export default class User {
  username = '';

  email = '';

  password = '';

  role = Roles.USER;

  constructor(username, email, password, role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
