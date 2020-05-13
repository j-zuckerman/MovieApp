import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const MoviesByGenre = ({ navigation, genreId }) => {
  const {
    genreList,
    fetchGenreList,
    moviesByGenre,
    fetchMoviesByGenre,
  } = useContext(MovieContext);

  useEffect(() => {
    fetchGenreList(genreId);
    fetchMoviesByGenre(genreId);
  }, [genreId]);

  return (
    <ScrollView style={styles.container}>
      {moviesByGenre.map((movie) => (
        <View key={movie.id}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { id: movie.id })}
          >
            <MovieCard movie={movie} navigation={navigation} />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
