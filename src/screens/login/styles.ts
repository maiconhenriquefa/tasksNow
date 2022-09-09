import styled from "styled-components/native"
import { LinearGradient } from 'expo-linear-gradient';
import theme from "../../theme/colors";

export const Container = styled(LinearGradient).attrs({
  colors:[theme.colors.primary100, theme.colors.primary200],
  start:{ x: 0.0, y: 0.5 },
  end:{ x: 0.5, y: 1.0 }
})`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 120px 24px;
`

export const WrapperInput = styled.View`
  margin-top: 120px;
`

export const WrapperLogin = styled.View`
  margin: 16px 0;
`
export const WrapperFooter = styled.View`
  margin-top: 80px;
  margin-bottom: 12px;
`

export const WrapperPress = styled.TouchableOpacity``;

export const ForgotText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: ${theme.colors.neutral50};
`

export const RegistryText = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${theme.colors.neutral50};
`