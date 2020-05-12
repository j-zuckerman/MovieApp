import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';

import { MovieCard } from '../movieCard';

export const SimilarMovies = ({ data }) => {
  return (
    <ScrollView horizontal={true}>
      {data.map((movie) => (
        <>
          <MovieCard movie={movie} />
        </>
      ))}
    </ScrollView>
  );
};
