import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
const Stack = createStackNavigator();

export type RootStackParams = {
  Home: undefined;
  Detail: undefined;
};

export const Navigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle:{
        backgroundColor: 'white',
      },
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
