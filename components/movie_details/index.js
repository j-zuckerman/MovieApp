import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { MovieContext } from '../../context';
import { MovieCast } from '../movie_cast';
import { SimilarMovies } from '../similar_movies';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w342/';

export const MovieDetails = ({ movieId, navigation }) => {
  const {
    isLoaded,
    movieDetails,
    movieTrailer,
    movieCast,
    similarMovies,
    fetchDetailsPageData,
  } = useContext(MovieContext);

  useEffect(() => {
    fetchDetailsPageData(movieId);
  }, [movieId]);

  console.log(movieDetails);

  if (!isLoaded) {
    return (
      <View style={[styles.loadingContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.movieBackdrop}
          source={{ uri: `${baseImageURLPoster}${movieDetails.backdrop_path}` }}
        />
        <View style={styles.movieDetails}>
          <View>
            <Text>{movieDetails.title}</Text>
            <Text>{movieDetails.tagline}</Text>
            <Text>{movieDetails.vote_average}</Text>
            <Text>{movieDetails.runtime}</Text>
          </View>
          <View style={styles.movieOverview}>
            <Text>{movieDetails.overview}</Text>
          </View>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    justifyContent: 'center',
  },
  movieBackdrop: {
    flex: 1,
    width: '100%',
    height: 300,
  },

  movieDetails: {
    marginTop: 15,
    padding: 10,
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
