import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MovieDetails } from '../components/movie_details';

export const Details = ({ route, navigation }) => {
  const { id } = route.params;
  return (
    <View>
      <MovieDetails navigation={navigation} movieId={id}></MovieDetails>
    </View>
  );
};
