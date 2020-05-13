import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import { MostPopular } from '../components/most_popular';
import { TopRated } from '../components/top_rated';
import { NowPlaying } from '../components/now_playing';
import { GenreList } from '../components/genres';

export const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <GenreList navigation={navigation} />
      <Text style={styles.header}>Most Popular</Text>
      <MostPopular navigation={navigation} />
      <Divider style={styles.divider} />
      <Text style={styles.header}>Top Rated</Text>
      <TopRated navigation={navigation} />
      <Divider style={styles.divider} />
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: 'gray',
    marginTop: 10,
    marginBottom: 10,
  },
});
