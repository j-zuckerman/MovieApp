import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const MostPopular = ({ navigation }) => {
  const { mostPopularMovies } = useContext(MovieContext);
  console.log(mostPopularMovies);
  console.log(navigation);
  return (
    <ScrollView horizontal={true}>
      {mostPopularMovies.map((movie) => (
        <View>
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
