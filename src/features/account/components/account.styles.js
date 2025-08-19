import React from 'react';
import { styled } from 'styled-components/native';
import { colors } from '../../../infrastructure/theme/colors';
import { Button, TextInput } from 'react-native-paper';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  width: 85%;
  border-radius: 10px;
  direction: flex;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 95%;
  align-self: center;
`;

export const BackButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 30%;
  align-self: center;
`;
export const AuthInputContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  height: 50px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;