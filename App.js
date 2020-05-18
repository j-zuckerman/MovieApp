import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import MovieProvider from './context';
import { BottomNavigation } from './navigation/BottomNavigation';
import { DrawerNavigation } from './navigation/DrawerNavigation';
import MovieStackNavigation from './navigation/MovieStackNavigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <MovieProvider>
      <BottomNavigation></BottomNavigation>
    </MovieProvider>
  );
}
