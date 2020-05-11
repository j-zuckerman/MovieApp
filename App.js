import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './components/header/navbar';
import MovieProvider from './context';
import { Home } from './screens/home';

export default function App() {
  return (
    <View style={styles.container}>
      <MovieProvider>
        <Navbar />
        <Home />
        <Text>Open up App.js to start working on your app!</Text>
      </MovieProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
