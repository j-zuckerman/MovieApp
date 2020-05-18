import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Rating } from 'react-native-elements';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

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
        <Rating
          type="custom"
          imageSize={20}
          readonly
          startingValue={movie.vote_average / 2}
          ratingColor="red"
          ratingBackgroundColor="pink"
          ratingTextColor="black"
        />
        <Text style={styles.vote}>{movie.vote_average}</Text>
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
    fontSize: 14,
    maxWidth: 200,
    fontWeight: 'bold',
  },
  vote: {
    color: 'gray',
  },
});
