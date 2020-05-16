import React, { useContext } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { MostPopular } from '../components/most_popular';
import { TopRated } from '../components/top_rated';
import { NowPlaying } from '../components/now_playing';
import { GenreList } from '../components/genres';
import { MovieContext } from '../context';

export const Home = ({ navigation }) => {
  const { isLoaded } = useContext(MovieContext);

  if (!isLoaded) {
    return (
      <View style={[styles.loadingContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else
    return (
      <View style={{ flex: 1 }}>
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
      </View>
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
