import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './components/header/navbar';
import MovieProvider from './context';
import { Home } from './screens/home';

export default function App() {
  return (
    <View>
      <MovieProvider>
        <Navbar />
        <Home />
      </MovieProvider>
    </View>
  );
}
