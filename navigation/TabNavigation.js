import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigation from './HomeNavigation';
import SearchNavigation from './SearchNavigation';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
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

            return <Ionicons name={iconName} size={24} color="black" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackNavigation} />
        <Tab.Screen name="Favorites" component={HomeStackNavigation} />
        <Tab.Screen name="Search" component={SearchNavigation} />
        <Tab.Screen name="Watch List" component={HomeStackNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
