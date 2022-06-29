/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import { ADD_TODO, TOOGLE_TODO } from '../constants';

const initialState = [];

// eslint-disable-next-line default-param-last
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case TOOGLE_TODO:
      // eslint-disable-next-line array-callback-return
      return state.map((todo) =>
        // eslint-disable-next-line no-unused-expressions
        (todo.id === action.payload.id) ? {
          ...todo,
          completed: !todo.completed,
        }
          : todo);
    default:
      return state;
  }
};

export default todosReducer;
