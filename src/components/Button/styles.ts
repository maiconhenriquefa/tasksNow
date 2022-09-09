import styled from "styled-components/native";
import { ButtonProps } from ".";
import theme from "../../theme/colors";
import shadow from "../../theme/shadow";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ButtonProps>`
  background-color: ${props => props.background ? props.background : theme.colors.contrast0};
  width: ${props => props.width};
  padding: 10px 0;
  border-radius: 12px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  ${shadow.shadow.primaryShadow};
`;

export const WrapperIcon = styled.View``;

export const TextButton = styled.Text<ButtonProps>`
  color: ${props => props.color ? props.color : theme.colors.neutral400};
  font-size: ${props => props.fontSize ? props.fontSize : 16}px;
  font-weight: 600;
`;