import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const NowPlaying = ({ navigation }) => {
  const { nowPlayingMovies } = useContext(MovieContext);

  return (
    <ScrollView>
      {nowPlayingMovies.map((movie) => (
        <View key={movie.id}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {
                title: movie.title,
                id: movie.id,
              })
            }
          >
            <MovieCard movie={movie} navigation={navigation} />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
