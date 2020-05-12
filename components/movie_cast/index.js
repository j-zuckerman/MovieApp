import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

const baseImageURLProfile = 'https://image.tmdb.org/t/p/w45/';

export const MovieCast = ({ data }) => {
  return (
    <ScrollView horizontal={true}>
      {data.map((castMember) => (
        <Image
          style={{ width: 50, height: 50 }}
          key={castMember.id}
          source={{ uri: `${baseImageURLProfile}${castMember.profile_path}` }}
        />
      ))}
    </ScrollView>
  );
};
