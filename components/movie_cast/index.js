import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const baseImageURLProfile = 'https://image.tmdb.org/t/p/w45/';

export const MovieCast = ({ data, navigation }) => {
  return (
    <ScrollView horizontal={true}>
      {data.map((castMember) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Cast Member', { id: castMember.id })
          }
        >
          <Image
            style={styles.castMember}
            key={castMember.id}
            source={{ uri: `${baseImageURLProfile}${castMember.profile_path}` }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  castMember: {
    margin: 8,
    width: 50,
    height: 70,
    borderRadius: 15,
  },
});
