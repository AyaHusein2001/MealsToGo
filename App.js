import { View, Text } from 'react-native';
import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeArea } from './src/components/utils/SafeArea';
import { Ionicons } from '@expo/vector-icons';
// for the custom fonts , we installed expo google fonts , expo fonts
// then we installed expo-google-fonts/oswald , lato also
const Tab = createBottomTabNavigator();

const TAB_ICON = {// this object is better than if statements
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};
const MapsScreen = () => {
  return (
    <SafeArea>
      <Text>Maps Screen</Text>
    </SafeArea>
  );
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
export default function App() {
  const oswaldLoaded = useOswald({
    Oswald_400Regular,
  });
  const latoLoaded = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
