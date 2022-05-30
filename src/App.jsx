import './App.css';
import React from 'react';
import Box from './components/box-element/box';
import TaskForm from './components/forms/taskForm';
import LoginFormik from './components/forms/loginFormik';

function App() {
  return (
    <div>

      <Box />
      <TaskForm />
      <LoginFormik />
    </div>
  );
}

export default App;
