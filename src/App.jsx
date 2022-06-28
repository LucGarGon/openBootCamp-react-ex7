import './App.css';
import React from 'react';
import Homepage from './pages/home/homepage';
import TodoContainer from './components/todo-container/todo-container';

function App() {
  return (
    <div>

      <Homepage />
      <TodoContainer />

    </div>
  );
}

export default App;
