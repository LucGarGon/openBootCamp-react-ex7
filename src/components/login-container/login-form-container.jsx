/* eslint-disable no-console */
import { connect } from 'react-redux';
import { httpRequest } from '../../store/actions/asyncActions';
import LoginFormik from '../forms/loginFormik';

const mapStateToProps = (state) => {
  return {
    loged: state.userState.loged,
    fetching: state.userState.fetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => {
      const data = {
        email,
        password,
      };
      const url = 'https://reqres.in/api/login';
      dispatch(httpRequest('post', url, data));
    },
  };
};

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginFormik);

export default LoginFormContainer;
