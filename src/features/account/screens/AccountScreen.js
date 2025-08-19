import React from 'react';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/Spacer';
import LottieView from 'lottie-react-native';
import { styled } from 'styled-components/native';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key={'animation'}
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../../../assets/watermelon.json')}
          style={{ width: '100%', height: '100%' }} //if u do not have this style , it will not show up
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          Login
        </AuthButton>
        <Spacer position="top" size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
