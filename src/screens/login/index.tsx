import React from 'react';


import Button from '@components/Button';
import AccountInput from '@screens/login/components/AccountInput';
import { Container, ForgotText, RegistryText, WrapperFooter, WrapperInput, WrapperLogin, WrapperPress } from './styles';

import LogoTasksNowIcon from '@assets/logo.svg';
import PasswordIcon from '@screens/login/password.svg';
import GoogleIcon from '@screens/login/google.svg';
import EmailIcon from '@screens/login/assets/email.svg';

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