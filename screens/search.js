import React from 'react';
import { Search } from '../components/search';
import { View, Text } from 'react-native';

export const SearchScreen = ({ navigation }) => {
  return (
    <View>
      <Search navigation={navigation} />
    </View>
  );
};
