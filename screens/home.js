import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MostPopular } from '../components/most_popular';
import { TopRated } from '../components/top_rated';
import { NowPlaying } from '../components/now_playing';

export const Home = () => {
  return (
    <View>
      <Text>Most Popular</Text>
      <MostPopular />

      <Text>Top Rated</Text>
      <TopRated />

      <Text>Now Playing</Text>
      <NowPlaying />
    </View>
  );
};
