/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
import { ADD_TODO, SET_VISIBILITY, TOOGLE_TODO } from '../constants';

let nextTodoID = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoID++,
      text,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOOGLE_TODO,
    payload: {
      id,
    },
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY,
    payload: {
      filter,
    },
  };
};
