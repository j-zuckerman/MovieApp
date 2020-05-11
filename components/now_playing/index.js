import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';

export const NowPlaying = () => {
  const { nowPlayingMovies } = useContext(MovieContext);

  return (
    <ScrollView horizontal={true}>
      {nowPlayingMovies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ScrollView>
  );
};
