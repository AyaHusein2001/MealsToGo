import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../../features/account/screens/AccountScreen';
import { LoginScreen } from '../../features/account/screens/LoginScreen';
import { RegisterScreen } from '../../features/account/screens/RegisterScreen';
const stack = createStackNavigator();
export const AccountNavigator = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Main" component={AccountScreen} />
      <stack.Screen name="Login" component={LoginScreen} />
      <stack.Screen name="Register" component={RegisterScreen} />
    </stack.Navigator>
  );
};
