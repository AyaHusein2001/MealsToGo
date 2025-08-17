import { Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from '../../components/utils/SafeArea';
import { RestaurantsNavigator } from './restaurants.navigator';
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  // this object is better than if statements
  RestaurantsTab: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings Screen</Text>
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false, //not showing screen header above
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato', // <-- use this instead of tabBarOptions
    tabBarInactiveTintColor: 'gray',
  };
};
export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="RestaurantsTab" component={RestaurantsNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
