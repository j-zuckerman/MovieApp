import React, { useContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { MovieContext } from '../context';
import { MovieCard } from '../components/movieCard';
import { ScrollView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const FavoritesScreen = ({ navigation }) => {
  const { fetchFavorites, favorites } = useContext(MovieContext);

  useEffect(async () => {
    let movieIds = JSON.parse(await AsyncStorage.getItem('Favorites'));
    console.log(movieIds);
    fetchFavorites(movieIds);
  }, []);

  return (
    <ScrollView>
      {favorites.map((movie) => (
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
