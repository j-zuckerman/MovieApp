import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Details } from '../screens/details';
import { CastMember } from '../screens/cast_member';
import { Genres } from '../screens/genres';

const Stack = createStackNavigator();

export default function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Details" component={Details}></Stack.Screen>
      <Stack.Screen name="Cast Member" component={CastMember}></Stack.Screen>
      <Stack.Screen name="Genres" component={Genres}></Stack.Screen>
    </Stack.Navigator>
  );
}
