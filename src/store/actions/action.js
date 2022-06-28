import { ADD_TODO, SET_VISIBILITY, TOOGLE_TODO } from '../constants';

let nextTodoId = 0;

const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    // eslint-disable-next-line no-plusplus
    id: nextTodoId++,
    text,
  },
});

const toogleTodo = (id) => ({
  type: TOOGLE_TODO,
  payload: {
    id,
  },
});

const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY,
  payload: {
    filter,
  },
});
export default { addTodo, toogleTodo, setVisibilityFilter };
