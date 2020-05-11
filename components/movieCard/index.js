import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w342/';

export const MovieCard = ({ movie }) => {
  return (
    <>
      <Image
        style={{ width: 160, height: 160 }}
        source={{ uri: `${baseImageURLPoster}${movie.poster_path}` }}
      />
      <Text>
        {movie.title}, {movie.vote_average}
      </Text>
    </>
  );
};
