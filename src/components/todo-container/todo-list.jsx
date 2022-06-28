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
        {todos.map((todo) => {
          <Todo
            key={todo.id}
            {...todo}
            onClick={
                () => onTodoClick(todo.id)
            }
          />;
        })}
      </ul>
    </div>
  );
}
