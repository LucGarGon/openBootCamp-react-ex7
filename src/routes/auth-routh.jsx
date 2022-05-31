/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function AuthRouth({ children }) {
  const logger = localStorage.getItem('credentials');
  if (!logger) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
