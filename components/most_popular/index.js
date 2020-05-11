import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';

export const MostPopular = () => {
  const { mostPopularMovies } = useContext(MovieContext);
  console.log(mostPopularMovies);
  return (
    <ScrollView horizontal={true}>
      {mostPopularMovies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ScrollView>
  );
};
