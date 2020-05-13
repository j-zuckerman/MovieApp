import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { MovieContext } from '../../context';
import { CastMemberAppearances } from '../cast_member_appearances';

const baseImageURLPoster = 'https://image.tmdb.org/t/p/w185/';

export const CastMemberDetails = ({ castMemberId, navigation }) => {
  const {
    castMemberDetails,
    fetchCastMemberDetails,
    castMemberAppearances,
    fetchCastMemberAppearances,
  } = useContext(MovieContext);

  useEffect(() => {
    fetchCastMemberAppearances(castMemberId);
    fetchCastMemberDetails(castMemberId);
  }, [castMemberId]);

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
