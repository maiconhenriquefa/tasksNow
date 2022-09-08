import React from 'react';


import Button from '../../components/Button';
import AccountInput from './components/AccountInput';
import { Container, ForgotText, RegistryText, WrapperFooter, WrapperInput, WrapperLogin } from './styles';

import LogoTasksNowIcon from '../../assets/logo.svg';
import PasswordIcon from './assets/password.svg';
import GoogleIcon from './assets/google.svg';
import EmailIcon from './assets/email.svg';

const Login = () => {
  return (
    <Container>
      <LogoTasksNowIcon />
      <WrapperInput>
        <AccountInput text='E-mail' icon={<EmailIcon />} />
        <AccountInput text='Senha' icon={<PasswordIcon />} />
      </WrapperInput>

      <WrapperLogin>
        <Button text='Entrar' color='white' width='100%' />
      </WrapperLogin>
      <ForgotText>Esqueci minha senha</ForgotText>

      <WrapperFooter>
        <Button fontSize={16} text='Conta Google' color='white' width='60%' icon={<GoogleIcon />} />
      </WrapperFooter>
      <RegistryText>Cadastre-se</RegistryText>
    </Container >
  );
}

export default Login;