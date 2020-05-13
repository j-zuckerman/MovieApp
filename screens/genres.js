import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoviesByGenre } from '../components/movies_by_genre';

export const Genres = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View>
      <MoviesByGenre navigation={navigation} genreId={id}></MoviesByGenre>
    </View>
  );
};
