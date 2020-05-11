import React, { createContext, useState, useEffect } from 'react';
import movieApi from '../api';
const apiKey = '9f39dd9c4f8c9231614049d653d261d6';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  const [searchResults, setSearchResults] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState([]);

  const [castMemberDetails, setCastMemberDetails] = useState([]);
  const [castMemberAppearances, setCastMemberAppearances] = useState([]);

  async function fetchNowPlaying() {
    const response = await movieApi.get(
      `movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );

    setNowPlayingMovies(response.data.results);
  }

  async function fetchMostPopular() {
    const response = await movieApi.get(
      `movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );

    setMostPopularMovies(response.data.results);
  }

  async function fetchTopRated() {
    const response = await movieApi.get(
      `movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );

    setTopRatedMovies(response.data.results);
  }

  async function fetchSimilarMovies(id) {
    const response = await movieApi.get(
      `movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );

    setSimilarMovies(response);
  }

  async function fetchMoviesByGenre(id) {
    const response = await movieApi.get(
      `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
    );

    setMoviesByGenre(response);
  }

  async function fetchSearchResults(searchValue) {
    const response = await movieDbAPI.get(
      `search/movie?api_key=${apiKey}&query=${searchValue}&page=1`
    );

    setSearchResults(response);
  }

  async function fetchGenreList() {
    const response = await movieApi.get(
      `genre/movie/list?api_key=${apiKey}&language=en-US`
    );

    setGenreList(response);
  }

  async function fetchMovieDetails(id) {
    const response = await movieApi.get(
      `movie/${id}?api_key=${apiKey}&language=en-US&page=1`
    );

    setMovieDetails(response);
  }

  async function fetchMovieCast(id) {
    const response = await movieApi.get(
      `movie/${id}/credits?api_key=${apiKey}`
    );

    setMovieCast(response);
  }

  async function fetchMovieTrailer(id) {
    const response = await movieApi.get(
      `movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );

    setMovieTrailer(response);
  }

  async function fetchCastMemberDetails(id) {
    const response = await movieApiAPI.get(`person/${id}?api_key=${apiKey}`);

    setCastMemberDetails(response);
  }

  async function fetchCastMemberAppearances(id) {
    const response = await movieApi.get(
      `person/${id}/movie_credits?api_key=${apiKey}`
    );

    setCastMemberAppearances(response);
  }

  useEffect(() => {
    fetchMostPopular();
    fetchNowPlaying();
    fetchTopRated();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        nowPlayingMovies,
        fetchNowPlaying,
        mostPopularMovies,
        fetchMostPopular,
        topRatedMovies,
        fetchTopRated,
        similarMovies,
        fetchSimilarMovies,
        moviesByGenre,
        fetchMoviesByGenre,
        fetchCastMemberAppearances,
        searchResults,
        fetchSearchResults,
        genreList,
        movieDetails,
        fetchMovieDetails,
        movieTrailer,
        fetchMovieTrailer,
        movieCast,
        fetchMovieCast,
        castMemberAppearances,
        fetchCastMemberAppearances,
        castMemberDetails,
        fetchCastMemberDetails,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
