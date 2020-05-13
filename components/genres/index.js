import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';

export const GenreList = ({ navigation }) => {
  return (
    <ScrollView horizontal={true}>
      <Button
        style={styles.button}
        title="Action"
        onPress={() => navigation.navigate('Genres', { id: 28 })}
      ></Button>
      <Button
        style={styles.button}
        title="Adventure"
        onPress={() => navigation.navigate('Genres', { id: 12 })}
      ></Button>
      <Button
        style={styles.button}
        title="Animation"
        onPress={() => navigation.navigate('Genres', { id: 16 })}
      ></Button>
      <Button
        style={styles.button}
        title="Comedy"
        onPress={() => navigation.navigate('Genres', { id: 35 })}
      ></Button>
      <Button
        style={styles.button}
        title="Crime"
        onPress={() => navigation.navigate('Genres', { id: 80 })}
      ></Button>
      <Button
        style={styles.button}
        title="Documentary"
        onPress={() => navigation.navigate('Genres', { id: 99 })}
      ></Button>
      <Button
        style={styles.button}
        title="Drama"
        onPress={() => navigation.navigate('Genres', { id: 18 })}
      ></Button>
      <Button
        style={styles.button}
        title="Family"
        onPress={() => navigation.navigate('Genres', { id: 10751 })}
      ></Button>
      <Button
        style={styles.button}
        title="Fantasy"
        onPress={() => navigation.navigate('Genres', { id: 14 })}
      ></Button>
      <Button
        style={styles.button}
        title="History"
        onPress={() => navigation.navigate('Genres', { id: 36 })}
      ></Button>
      <Button
        style={styles.button}
        title="Horror"
        onPress={() => navigation.navigate('Genres', { id: 27 })}
      ></Button>
      <Button
        style={styles.button}
        title="Music"
        onPress={() => navigation.navigate('Genres', { id: 10402 })}
      ></Button>
      <Button
        style={styles.button}
        title="Mystery"
        onPress={() => navigation.navigate('Genres', { id: 9648 })}
      ></Button>
      <Button
        style={styles.button}
        title="Romance"
        onPress={() => navigation.navigate('Genres', { id: 10479 })}
      ></Button>
      <Button
        style={styles.button}
        title="Science Fiction"
        onPress={() => navigation.navigate('Genres', { id: 878 })}
      ></Button>
      <Button
        style={styles.button}
        title="TV Movie"
        onPress={() => navigation.navigate('Genres', { id: 10770 })}
      ></Button>
      <Button
        style={styles.button}
        title="Thriller"
        onPress={() => navigation.navigate('Genres', { id: 53 })}
      ></Button>
      <Button
        style={styles.button}
        title="War"
        onPress={() => navigation.navigate('Genres', { id: 10752 })}
      ></Button>
      <Button
        style={styles.button}
        title="Western"
        onPress={() => navigation.navigate('Genres', { id: 37 })}
      ></Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
});
