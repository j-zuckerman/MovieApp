import React from 'react';
import MovieStackNavigation from './MovieStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator lazy={true}>
      <Drawer.Screen
        name="Top Rated"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Rated' }}
      />
      <Drawer.Screen
        name="Popular"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Popular' }}
      />
      <Drawer.Screen
        name="Now Playing"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Playing' }}
      />
      <Drawer.Screen
        name="Action"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 28 }}
      />
      <Drawer.Screen
        name="Adventure"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 12 }}
      />
      <Drawer.Screen
        name="Animation"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 16 }}
      />
      <Drawer.Screen
        name="Comedy"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 35 }}
      />
      <Drawer.Screen
        name="Crime"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 80 }}
      />
      <Drawer.Screen
        name="Documentary"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 99 }}
      />
      <Drawer.Screen
        name="Drama"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 18 }}
      />
      <Drawer.Screen
        name="Fantasy"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 10751 }}
      />
      <Drawer.Screen
        name="Family"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 14 }}
      />
      <Drawer.Screen
        name="History"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 36 }}
      />
      <Drawer.Screen
        name="Horror"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 27 }}
      />
      <Drawer.Screen
        name="Music"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 10402 }}
      />
      <Drawer.Screen
        name="Mystery"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 9648 }}
      />
      <Drawer.Screen
        name="Romance"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 10479 }}
      />
      <Drawer.Screen
        name="Science Fiction"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 878 }}
      />
      <Drawer.Screen
        name="TV Movie"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 10770 }}
      />
      <Drawer.Screen
        name="Thriller"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 53 }}
      />
      <Drawer.Screen
        name="War"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 10752 }}
      />
      <Drawer.Screen
        name="Western"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 37 }}
      />
    </Drawer.Navigator>
  );
};
