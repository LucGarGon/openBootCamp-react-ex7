/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { addTodo } from '../../../store/actions/action';
import TodoForm from './TodoForm';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (text) => {
      dispatch(addTodo(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
