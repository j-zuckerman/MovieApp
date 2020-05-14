import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="favorite" type="material" color="palevioletred"></Icon>
        <Text>Favorites</Text>
      </View>

      <View>
        <Icon name="search" type="material" color="palevioletred"></Icon>
        <Text>Search</Text>
      </View>

      <View>
        <Icon name="watch-later" type="material" color="palevioletred"></Icon>
        <Text>Watch List</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderColor: 'gray',
    borderWidth: 1,
  },
  tab: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
