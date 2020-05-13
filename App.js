import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navbar } from './components/header/navbar';
import MovieProvider from './context';
import { Home } from './screens/home';
import { Details } from './screens/details';
import { CastMember } from './screens/cast_member';
import { Genres } from './screens/genres';

const Stack = createStackNavigator();

export default function App() {
  return (
    <MovieProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Details" component={Details}></Stack.Screen>
          <Stack.Screen
            name="Cast Member"
            component={CastMember}
          ></Stack.Screen>
          <Stack.Screen name="Genres" component={Genres}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </MovieProvider>
  );
}
