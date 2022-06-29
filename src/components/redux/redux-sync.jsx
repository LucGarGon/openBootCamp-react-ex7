import React from 'react';
import FilterOptions from '../filter/filter-options';
import TodoFormContainer from '../todo-container/forms/TodoFormContainer';
import TodoContainer from '../todo-container/todo-container';

export default function ReduxSync() {
  return (
    <>
      <TodoContainer />
      <TodoFormContainer />
      <FilterOptions />
    </>
  );
}
