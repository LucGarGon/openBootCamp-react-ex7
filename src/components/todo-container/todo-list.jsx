/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import Todo from './todo';

export default function TodoList({ todos, onTodoClick }) {
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            {...todo} // id, text, completed
            onClick={
                  () => onTodoClick(todo.id)
              }
          />
        ))}
      </ul>
    </div>
  );
}
