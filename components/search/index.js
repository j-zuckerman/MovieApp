import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Search = ({ route, navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchResults, fetchSearchResults, isLoaded } = useContext(
    MovieContext
  );

  const updateSearch = (text) => {
    const query = text;
    setSearchQuery(query);
  };

  const handleSubmit = () => {
    fetchSearchResults(searchQuery);
  };

  return (
    <ScrollView>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(text) => updateSearch(text)}
        value={searchQuery}
        onSubmitEditing={handleSubmit}
      />

      {searchResults.map((movie) => (
        <View key={movie.id}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { id: movie.id })}
          >
            <MovieCard movie={movie} navigation={navigation} />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
