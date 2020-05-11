import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MostPopular } from '../components/most_popular';
import { TopRated } from '../components/top_rated';
import { NowPlaying } from '../components/now_playing';

export const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Most Popular</Text>
      <MostPopular navigation={navigation} />

      <Text>Top Rated</Text>
      <TopRated nav={navigation} />

      <Text>Now Playing</Text>
      <NowPlaying nav={navigation} />
    </View>
  );
};
