import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { Divider, Button } from 'react-native-elements';
import { AsyncStorage } from 'react-native';

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
            <View style={styles.firstLine}>
              <Text style={styles.movieTitle}>{movieDetails.title}</Text>
              <Text style={styles.releaseDate}>
                ({movieDetails.release_date})
              </Text>
            </View>
            <Text style={styles.tagLine}>{movieDetails.tagline}</Text>
            <Text style={styles.metadata}>
              {movieDetails.vote_average} | {movieDetails.runtime} min.
            </Text>
            <View style={styles.buttonGroup}>
              <Button style={styles.addButton} type="outline" title="Favorite">
                Favorite
              </Button>
              <Button
                style={styles.addButton}
                type="outline"
                title="Watch List"
              ></Button>
            </View>
          </View>
          <Divider style={styles.divider} />
          <Text style={styles.header}>Cast</Text>
          <MovieCast navigation={navigation} data={movieCast}></MovieCast>
          <Divider style={styles.divider} />

          <Text style={styles.header}>Plot</Text>
          <View style={styles.movieOverview}>
            <Text>{movieDetails.overview}</Text>
          </View>

          <Text style={styles.header}>Suggested Movies</Text>
          <SimilarMovies
            navigation={navigation}
            data={similarMovies}
          ></SimilarMovies>
        </View>
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
    height: 280,
  },
  movieDetails: {
    marginTop: 15,
    padding: 15,
  },
  divider: {
    color: 'black',
    marginTop: 10,
  },
  firstLine: {
    flexDirection: 'row',
  },

  movieTitle: {
    color: '#040F16',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2,
  },
  releaseDate: {
    color: '#808080',
    fontSize: 14,
  },
  tagLine: {
    fontSize: 16,
    color: 'gray',
    textTransform: 'uppercase',

    fontWeight: 'bold',
  },
  metadata: {
    flexDirection: 'row',
    fontSize: 14,
    color: '#040F16',
  },
  buttonGroup: {
    marginTop: 10,
    flexDirection: 'row',
  },
  addButton: {
    marginRight: 10,
  },
  movieOverview: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 10,
    color: '#333',
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,

    letterSpacing: 1,
  },
});
