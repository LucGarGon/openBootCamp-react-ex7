import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link } from 'react-router-dom';
import HomepageRouter from './homepage-router';
import './homePageStyles.css';
import { styleContainer, styleTool, styleBar } from './homepage.styles';
import TodoContainer from '../../components/todo-container/todo-container';
import TodoFormContainer from '../../components/todo-container/forms/TodoFormContainer';

export default function Homepage() {
  return (
    <Container style={styleContainer}>
      <AppBar position="static" style={styleBar}>
        <Toolbar style={styleTool}>
          <p><Link to="login">login</Link></p>
          <p><Link to="perfil">mi perfil</Link></p>
          <p><Link to="chuckjokes">chuck jokes</Link></p>
        </Toolbar>
      </AppBar>
      <TodoContainer />
      <TodoFormContainer />
      <HomepageRouter />
    </Container>

  );
}
