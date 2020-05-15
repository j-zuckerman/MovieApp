import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../screens/home';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
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
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
