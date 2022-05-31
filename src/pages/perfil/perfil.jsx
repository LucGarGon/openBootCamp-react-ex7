/* eslint-disable no-console */
import React from 'react';

export default function Perfil() {
  const user = JSON.parse(localStorage.getItem('credentials'));
  return (
    <>
      <h1>perfil</h1>
      <p>Email</p>
      <p>{user.email}</p>
    </>
  );
}
