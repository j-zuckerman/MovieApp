import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MovieCard } from '../movieCard';

export const SimilarMovies = ({ data, navigation }) => {
  return (
    <ScrollView horizontal={true}>
      {data.map((movie) => (
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
