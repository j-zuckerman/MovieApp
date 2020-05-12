import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { MostPopular } from '../components/most_popular';
import { TopRated } from '../components/top_rated';
import { NowPlaying } from '../components/now_playing';

export const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Most Popular</Text>
      <MostPopular navigation={navigation} />

      <Text style={styles.header}>Top Rated</Text>
      <TopRated navigation={navigation} />

      <Text style={styles.header}>Now Playing</Text>
      <NowPlaying navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
