import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../screens/details';
import { CastMemberScreen } from '../screens/cast_member';
import { FavoritesScreen } from '../screens/favorites';

const Stack = createStackNavigator();

export default function FavoritesStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerStyle: {
            backgroundColor: '#bf211e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#bf211e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Cast Member"
        component={CastMemberScreen}
        options={{
          headerStyle: {
            backgroundColor: '#bf211e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
