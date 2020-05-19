import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DisplayScreen } from '../screens/display';
import { DetailsScreen } from '../screens/details';
import { CastMemberScreen } from '../screens/cast_member';

const Stack = createStackNavigator();

export default function MovieStackNavigation({ navigation, route }) {
  const { displayType } = route.params;
  const { genreId } = route.params;
  const { title } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Display"
        component={DisplayScreen}
        initialParams={{ displayType: displayType, genreId: genreId }}
        options={{
          title: title,
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
