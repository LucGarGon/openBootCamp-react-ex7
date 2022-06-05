/* eslint-disable no-console */
import React, { useEffect } from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import AuthRouth from '../../routes/auth-routh';
import ChuckJokes from '../chuck-jokes/chuck-jokes';
import Loginpage from '../login/loginpage';
import Perfil from '../perfil/perfil';

export default function HomepageRouter() {
  let isLogin = false;
  // eslint-disable-next-line no-console
  useEffect(() => {
    isLogin = localStorage.getItem('credentials');
    console.log('is', isLogin);
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={<Loginpage />}
      />
      <Route
        path="/chuckjokes"
        element={<ChuckJokes />}
      />
      <Route
        path="/perfil"
        element={(
          <AuthRouth>
            <Perfil />
          </AuthRouth>
        )}
      />
    </Routes>
  );
}
