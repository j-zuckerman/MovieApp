import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DetailsScreen } from '../screens/details';
import { CastMemberScreen } from '../screens/cast_member';
import { SearchScreen } from '../screens/search';

const Stack = createStackNavigator();

export default function SearchStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
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
