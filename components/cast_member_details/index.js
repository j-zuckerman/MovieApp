import React, { useContext, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
} from 'react-native';
import { MovieContext } from '../../context';
import { CastMemberAppearances } from '../cast_member_appearances';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';

export const CastMemberDetails = ({ castMemberId, navigation }) => {
  const {
    castMemberDetails,
    fetchCastMemberPageData,
    castMemberAppearances,
    isLoaded,
  } = useContext(MovieContext);

  useEffect(() => {
    fetchCastMemberPageData(castMemberId);
  }, [castMemberId]);

  if (!isLoaded) {
    return (
      <View style={[styles.loadingContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageSection}>
          <Image
            style={styles.castMemberImage}
            source={{
              uri: `${baseImageURLPoster}${castMemberDetails.profile_path}`,
            }}
          />
          <Text>{castMemberDetails.name}</Text>
        </View>
        <Text>{castMemberDetails.biography}</Text>

        <Text>Appears In</Text>
        <CastMemberAppearances
          navigation={navigation}
          data={castMemberAppearances}
        />
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
  container: {
    padding: 15,
  },
  castMemberImage: {
    borderRadius: 15,
    width: 185,
    height: 260,
    marginRight: 10,
  },
  imageSection: {
    alignItems: 'center',
  },
});
