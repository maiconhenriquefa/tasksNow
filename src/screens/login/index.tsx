import React from 'react';
import LogoTasksNowIcon from '../../assets/logo.svg';
import InputAccount from './components/InputAccount';
import { AccountTitle, Container } from './style';

const Login = () => {
  return (
    <Container>
      <LogoTasksNowIcon />
      <AccountTitle>Acesse sua conta</AccountTitle>
      <InputAccount />
    </Container>
  );
}

export default Login;