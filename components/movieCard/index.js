import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MovieCard = ({ movie }) => {
  return (
    <Text>
      {movie.title}, {movie.vote_average}
    </Text>
  );
};
