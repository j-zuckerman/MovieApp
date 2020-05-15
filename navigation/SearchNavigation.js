import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Details } from '../screens/details';
import { CastMember } from '../screens/cast_member';
import { Search } from '../components/search';

const Stack = createStackNavigator();

export default function SearchNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search}></Stack.Screen>
      <Stack.Screen name="Details" component={Details}></Stack.Screen>
      <Stack.Screen name="Cast Member" component={CastMember}></Stack.Screen>
    </Stack.Navigator>
  );
}
