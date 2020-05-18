import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const TopRated = ({ navigation }) => {
  const { topRatedMovies, isLoading } = useContext(MovieContext);

  return (
    <ScrollView>
      {topRatedMovies.map((movie) => (
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
