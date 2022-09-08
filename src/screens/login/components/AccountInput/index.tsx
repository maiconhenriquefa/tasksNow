import React, { useRef } from 'react'
import { Container, TextInput, WrapperIcon } from './styles';

interface AccountInputProps {
  icon?: any;
  text: string;
};

const AccountInput = ({ icon, text }: AccountInputProps) => {
  const accountRef = useRef<any>(null);

  return (
    <Container>
      {icon ? (
        <WrapperIcon
          onPress={() => accountRef?.current?.focus()} >
          {icon}
        </WrapperIcon>
      ) : (
        null
      )
      }
      <TextInput
        ref={accountRef}
        text={text} />
    </Container >
  )
}

export default AccountInput;