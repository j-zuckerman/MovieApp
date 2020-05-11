import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';

export const MostPopular = ({ navigation }) => {
  const { mostPopularMovies } = useContext(MovieContext);
  console.log(mostPopularMovies);
  console.log(navigation);
  return (
    <ScrollView horizontal={true}>
      {mostPopularMovies.map((movie) => (
        <>
          <MovieCard movie={movie} />
          <Button
            title="View Details"
            onPress={() => navigation.navigate('Details', { id: movie.id })}
          ></Button>
        </>
      ))}
    </ScrollView>
  );
};
