import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import todosReducer from './todosRecuer';
import userReducer from './useReducer';

const rootReducer = combineReducers(
  {
    todos: todosReducer,
    filterState: filterReducer,
    userState: userReducer,
  },
);

export default rootReducer;
