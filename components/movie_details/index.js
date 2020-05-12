import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCast } from '../movie_cast';
import { SimilarMovies } from '../similar_movies';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';

export const MovieDetails = ({ movieId, navigation }) => {
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

  console.log(movieDetails);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.posterSection}>
        <Image
          style={styles.moviePoster}
          source={{ uri: `${baseImageURLPoster}${movieDetails.poster_path}` }}
        />
        <View style={styles.movieMetadata}>
          <Text>{movieDetails.title}</Text>
          <Text>{movieDetails.tagline}</Text>
          <Text>{movieDetails.vote_average}</Text>
          <Text>{movieDetails.runtime}</Text>
        </View>
      </View>

      <View style={styles.movieOverview}>
        <Text>{movieDetails.overview}</Text>
      </View>

      <Text style={styles.header}>Cast</Text>
      <MovieCast navigation={navigation} data={movieCast}></MovieCast>

      <Text style={styles.header}>Similar</Text>
      <SimilarMovies
        navigation={navigation}
        data={similarMovies}
      ></SimilarMovies>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  moviePoster: {
    borderRadius: 15,
    width: 185,
    height: 260,
    marginRight: 10,
  },

  posterSection: {
    flexDirection: 'row',
  },
  movieMetadata: {
    marginTop: 15,
    flexDirection: 'column',
  },
  movieOverview: {
    marginTop: 15,
    marginBottom: 10,
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
