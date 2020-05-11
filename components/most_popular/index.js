import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';

export const MostPopular = () => {
  const { mostPopularMovies } = useContext(MovieContext);
  console.log(mostPopularMovies);
  return (
    <View>
      {mostPopularMovies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </View>
  );
};
