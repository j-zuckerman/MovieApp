import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MovieStackNavigation from './MovieStackNavigation';
import SearchStackNavigation from './SearchStackNavigation';
import { DrawerNavigation } from './DrawerNavigation';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'md-home';
            } else if (route.name === 'Favorites') {
              iconName = 'md-heart';
            } else if (route.name === 'Watch List') {
              iconName = 'md-tv';
            } else if (route.name == 'Search') {
              iconName = 'md-search';
            }

            return <Ionicons name={iconName} size={24} color="#bf211e" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={DrawerNavigation} />
        <Tab.Screen name="Favorites" component={DrawerNavigation} />
        <Tab.Screen name="Search" component={SearchStackNavigation} />
        <Tab.Screen name="Watch List" component={DrawerNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
