import React from 'react';
import { Link } from 'react-router-dom';
import HomepageRouter from './homepage-router';

export default function Homepage() {
  return (
    <>
      <p><Link to="login">login</Link></p>
      <p><Link to="perfil">mi perfil</Link></p>
      <HomepageRouter />
    </>
  );
}
