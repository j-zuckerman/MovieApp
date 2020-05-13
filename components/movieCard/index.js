import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w154/';

export const MovieCard = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.moviePoster}
        source={{ uri: `${baseImageURLPoster}${movie.poster_path}` }}
      />

      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {movie.title}
      </Text>
      <Text>{movie.vote_average}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',

    marginRight: 20,
    maxWidth: 160,
    maxHeight: 280,
  },
  moviePoster: {
    borderRadius: 15,
    width: 154,
    height: 220,
  },
  title: {
    fontSize: 14,
  },
});
