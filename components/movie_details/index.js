import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { MovieContext } from '../../context';

export const MovieDetails = ({ movieId }) => {
  const {
    movieDetails,
    fetchMovieDetails,
    movieTrailer,
    fetchMovieTrailer,
    movieCast,
    fetchMovieCast,
    similarMovies,
    fetchSimilarMovies,
  } = useContext(MovieContext);

  useEffect(() => {
    fetchMovieDetails(movieId);
    fetchMovieTrailer(movieId);
    fetchSimilarMovies(movieId);
    fetchMovieCast(movieId);
  }, [movieId]);

  console.log(JSON.stringify(movieId));
  return (
    <>
      <Text>Details</Text>
      <Text>{movieDetails.title}</Text>
      <Text>{movieDetails.tagline}</Text>
      <Text>{movieDetails.vote_average}</Text>
      <Text>{movieDetails.runtime}</Text>
      <Text>{movieDetails.release_date}</Text>
      <Text>{movieDetails.overview}</Text>
    </>
  );
};
