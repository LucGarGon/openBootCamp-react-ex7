import { connect } from 'react-redux';
import { toggleTodo } from '../../store/actions/action';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../../store/constants';
import TodoList from './todo-list';

const filterTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    case SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => ({
  todos: filterTodos(state.todos, state.filterState),
});

const mapDispatchToProps = (dispatch) => ({

  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },

});
const con = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default con;
