import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import todosReducer from './todosRecuer';

const rootReducer = combineReducers(
  {
    todos: todosReducer,
    filterState: filterReducer,
  },
);

export default rootReducer;
