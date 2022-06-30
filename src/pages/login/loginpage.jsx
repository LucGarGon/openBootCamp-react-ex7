import React from 'react';
import LoginFormik from '../../components/forms/loginFormik';
import LoginFormContainer from '../../components/login-container/login-form-container';

export default function Loginpage() {
  return (
    <>
      <LoginFormik />
      <h2>async login</h2>
      <LoginFormContainer />
    </>
  );
}
