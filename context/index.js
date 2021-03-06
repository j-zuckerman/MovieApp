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

  const [favorites, setFavorites] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const [isLoaded, setLoaded] = useState(false);

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

  async function fetchHomePageData() {
    setLoaded(false);
    fetchTopRated();
    fetchMostPopular();
    fetchNowPlaying();
    setLoaded(true);
  }

  async function fetchSimilarMovies(id) {
    const response = await movieApi.get(
      `movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );

    setSimilarMovies(response.data.results);
  }

  async function fetchMovieDetails(id) {
    const response = await movieApi.get(
      `movie/${id}?api_key=${apiKey}&language=en-US&page=1`
    );

    setMovieDetails(response.data);
  }

  async function fetchMovieCast(id) {
    const response = await movieApi.get(
      `movie/${id}/credits?api_key=${apiKey}`
    );

    setMovieCast(response.data.cast);
  }

  async function fetchMovieTrailer(id) {
    const response = await movieApi.get(
      `movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );

    setMovieTrailer(response.data.results);
  }

  async function fetchDetailsPageData(id) {
    setLoaded(false);

    fetchSimilarMovies(id);
    fetchMovieDetails(id);
    fetchMovieCast(id);
    fetchMovieTrailer(id);

    setLoaded(true);
  }

  async function fetchCastMemberDetails(id) {
    const response = await movieApi.get(`person/${id}?api_key=${apiKey}`);

    setCastMemberDetails(response.data);
  }

  async function fetchCastMemberAppearances(id) {
    const response = await movieApi.get(
      `person/${id}/movie_credits?api_key=${apiKey}`
    );

    setCastMemberAppearances(response.data.cast);
  }

  async function fetchCastMemberPageData(id) {
    setLoaded(false);

    fetchCastMemberAppearances(id);
    fetchCastMemberDetails(id);

    setLoaded(true);
  }

  async function fetchMoviesByGenre(id) {
    setLoaded(false);
    const response = await movieApi.get(
      `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
    );

    setMoviesByGenre(response.data.results);
    setLoaded(true);
  }

  async function fetchSearchResults(searchValue) {
    if (searchValue.length > 1) {
      setLoaded(false);
      const response = await movieApi.get(
        `search/movie?api_key=${apiKey}&query=${searchValue}&page=1`
      );

      setSearchResults(response.data.results);
      setLoaded(true);
    }
  }

  async function fetchGenreList() {
    setLoaded(false);
    const response = await movieApi.get(
      `genre/movie/list?api_key=${apiKey}&language=en-US`
    );

    setGenreList(response.data.genres);
    setLoaded(true);
  }

  async function fetchFavorites(listOfIds) {
    setLoaded(false);

    let responses = [];
    Promise.all(
      listOfIds.map((id) =>
        movieApi.get(`movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
      )
    ).then((resolvedValues) => {
      resolvedValues.forEach((value) => {
        responses.push(value.data);
      });
    });
    setFavorites(responses);

    setLoaded(true);
  }

  async function fetchWatchList(listOfIds) {
    setLoaded(false);

    let responses = [];
    Promise.all(
      listOfIds.map((id) =>
        movieApi.get(`movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
      )
    ).then((resolvedValues) => {
      resolvedValues.forEach((value) => {
        responses.push(value.data);
      });
    });

    console.log(responses);
    setWatchList(responses);

    setLoaded(true);
  }

  useEffect(() => {
    fetchHomePageData();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        watchList,
        favorites,
        fetchWatchList,
        fetchFavorites,
        fetchHomePageData,
        fetchCastMemberPageData,
        fetchDetailsPageData,
        isLoaded,
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
        fetchGenreList,
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
