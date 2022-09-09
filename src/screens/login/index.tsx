import React from 'react';


import Button from '../../components/Button';
import AccountInput from './components/AccountInput';
import { Container, ForgotText, RegistryText, WrapperFooter, WrapperForgot, WrapperInput, WrapperLogin, WrapperPress } from './styles';

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
        <Button text='Entrar' background='FDFDFD' width='100%' />
      </WrapperLogin>
      <WrapperPress>
        <ForgotText>
          Esqueci minha senha
        </ForgotText>
      </WrapperPress>

      <WrapperFooter>
        <Button fontSize={14} text='Conta Google' background='#FDFDFD' width='50%' icon={<GoogleIcon />} />
      </WrapperFooter>
      <WrapperPress>
        <RegistryText>Cadastre-se</RegistryText>
      </WrapperPress>

    </Container >
  );
}

export default Login;