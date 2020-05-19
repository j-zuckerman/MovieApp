import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w342/';

export const MovieCard = ({ movie }) => {
  return (
    <View style={styles.container}>
      <View style={styles.posterContainer}>
        <Image
          style={styles.moviePoster}
          source={{ uri: `${baseImageURLPoster}${movie.poster_path}` }}
        />
      </View>
      <View>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {movie.title}
        </Text>

        <View style={styles.rating}>
          <Text style={styles.vote}>Rating: {movie.vote_average}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    marginRight: 20,
  },
  posterContainer: {
    marginRight: 20,
  },
  moviePoster: {
    borderRadius: 15,
    width: 160,
    height: 240,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    maxWidth: 200,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  rating: {
    flexDirection: 'row',
  },
  vote: {
    color: 'gray',
    fontSize: 16,
  },
});
