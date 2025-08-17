import { Text } from 'react-native';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { AppNavigator } from './app.navigator';
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AccountNavigator } from './account.navigator';
const Navigation = () => {
  const { user } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
