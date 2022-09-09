import React from 'react'
import { Container, TextButton, WrapperIcon } from './styles';

export interface ButtonProps {
  width: string;
  background?: string;
  text: string;
  icon?: any;
  fontSize?: number;
}

const Button = ({ fontSize, width, background, text, icon }: ButtonProps) => {
  return (
    <Container width={width} background={background}>
      {icon ? (
        <WrapperIcon>{icon}</WrapperIcon>
      ) : (
        null
      )}
      <TextButton fontSize={fontSize}>{text}</TextButton>
    </Container>
  )
}

export default Button;