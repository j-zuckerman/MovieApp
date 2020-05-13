import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CastMemberDetails } from '../components/cast_member_details';

export const CastMember = ({ route, navigation }) => {
  const { id } = route.params;
  return (
    <View>
      <CastMemberDetails navigation={navigation} castMemberId={id} />
    </View>
  );
};
