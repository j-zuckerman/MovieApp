import React, { useContext, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
} from 'react-native';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const MoviesByGenre = ({ navigation, genreId }) => {
  const {
    isLoaded,
    genreList,
    fetchGenreList,
    moviesByGenre,
    fetchMoviesByGenre,
  } = useContext(MovieContext);

  useEffect(() => {
    fetchGenreList(genreId);
    fetchMoviesByGenre(genreId);
  }, [genreId]);

  if (!isLoaded) {
    return (
      <View style={[styles.loadingContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
  },
});
