import React from 'react';
import MovieStackNavigation from './MovieStackNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator lazy={true}>
      <Drawer.Screen
        name="Popular"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Popular', title: 'Popular' }}
      />
      <Drawer.Screen
        name="Top Rated"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Top Rated', title: 'Top Rated' }}
      />

      <Drawer.Screen
        name="Now Playing"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Now Playing', title: 'Now Playing' }}
      />
      <Drawer.Screen
        name="Action"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 28, title: 'Action' }}
      />
      <Drawer.Screen
        name="Adventure"
        component={MovieStackNavigation}
        initialParams={{
          displayType: 'Genre',
          genreId: 12,
          title: 'Adventure',
        }}
      />
      <Drawer.Screen
        name="Animation"
        component={MovieStackNavigation}
        initialParams={{
          displayType: 'Genre',
          genreId: 16,
          title: 'Animation',
        }}
      />
      <Drawer.Screen
        name="Comedy"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 35, title: 'Comedy' }}
      />
      <Drawer.Screen
        name="Crime"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 80, title: 'Crime' }}
      />
      <Drawer.Screen
        name="Documentary"
        component={MovieStackNavigation}
        initialParams={{
          displayType: 'Genre',
          genreId: 99,
          title: 'Documentary',
        }}
      />
      <Drawer.Screen
        name="Drama"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 18, title: 'Drama' }}
      />
      <Drawer.Screen
        name="Fantasy"
        component={MovieStackNavigation}
        initialParams={{
          displayType: 'Genre',
          genreId: 10751,
          title: 'Fantasy',
        }}
      />
      <Drawer.Screen
        name="Family"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 14, title: 'Family' }}
      />
      <Drawer.Screen
        name="History"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 36, title: 'History' }}
      />
      <Drawer.Screen
        name="Horror"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 27, title: 'Horror' }}
      />
      <Drawer.Screen
        name="Music"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 10402, title: 'Music' }}
      />
      <Drawer.Screen
        name="Mystery"
        component={MovieStackNavigation}
        initialParams={{
          displayType: 'Genre',
          genreId: 9648,
          title: 'Mystery',
        }}
      />
      <Drawer.Screen
        name="Romance"
        component={MovieStackNavigation}
        initialParams={{
          displayType: 'Genre',
          genreId: 10479,
          title: 'Romance',
        }}
      />
      <Drawer.Screen
        name="Science Fiction"
        component={MovieStackNavigation}
        initialParams={{
          displayType: 'Genre',
          genreId: 878,
          title: 'Science Fiction',
        }}
      />
      <Drawer.Screen
        name="TV Movie"
        component={MovieStackNavigation}
        initialParams={{
          displayType: 'Genre',
          genreId: 10770,
          title: 'TV Movie',
        }}
      />
      <Drawer.Screen
        name="Thriller"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 53, title: 'Thriller' }}
      />
      <Drawer.Screen
        name="War"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 10752, title: 'War' }}
      />
      <Drawer.Screen
        name="Western"
        component={MovieStackNavigation}
        initialParams={{ displayType: 'Genre', genreId: 37, title: 'Western' }}
      />
    </Drawer.Navigator>
  );
};
