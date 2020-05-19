import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import { MostPopular } from '../components/most_popular';
import { MovieContext } from '../context';
import { NowPlaying } from '../components/now_playing';
import { TopRated } from '../components/top_rated';
import { MoviesByGenre } from '../components/movies_by_genre';

export const DisplayScreen = ({ navigation, route, screenProps }) => {
  const { displayType } = route.params;
  const { genreId } = route.params;

  if (displayType === 'Top Rated') {
    return (
      <ScrollView>
        <TopRated navigation={navigation} />
      </ScrollView>
    );
  } else if (displayType === 'Popular') {
    return (
      <ScrollView>
        <MostPopular navigation={navigation} />
      </ScrollView>
    );
  } else if (displayType === 'Now Playing') {
    return (
      <ScrollView>
        <NowPlaying navigation={navigation} />
      </ScrollView>
    );
  } else if (displayType === 'Genre') {
    return (
      <ScrollView>
        <MoviesByGenre genreId={genreId} navigation={navigation} />
      </ScrollView>
    );
  } else return null;
};
