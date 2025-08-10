import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/RestaurantsScreen';
import { RestaurantDetail } from '../../features/restaurants/screens/RestaurantDetail';
const RestaurantStack = createStackNavigator();
// this is a sub route from the original routes in App
// all what is here is restaurants /....
// also any component here gets a prop called navigation , used to navigate between tabs
export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.BottomSheetAndroid,//changing the animation of navigaton , making it like a bottom sheet
      }}
    >
      {/* this is the initial point of the stack , so it will always render first */}
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
