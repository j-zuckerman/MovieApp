import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';

export const TopRated = () => {
  const { topRatedMovies } = useContext(MovieContext);

  return (
    <ScrollView horizontal={true}>
      {topRatedMovies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ScrollView>
  );
};
