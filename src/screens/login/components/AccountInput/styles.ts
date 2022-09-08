import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import colors from "../../../../theme/colors";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  border-color: ${colors.colors.primary400};
  border-bottom-width: 2px;
  justify-content: center;
  padding: 8px 0;
`;

export const WrapperIcon = styled.TouchableOpacity`
  width: 10%;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.TextInput.attrs(({text}) => ({
  placeholder: text,
  placeholderTextColor: colors.colors.neutral50,
  keyboardType: (text === 'E-mail') ? 'email-address' : 'default',
  secureTextEntry: text === 'Senha'
}))
`
  width: 90%;
  color: ${colors.colors.neutral50};
`;