import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator, RootStackParams } from './StackNavigator';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Tab1 = createBottomTabNavigator();
const Tab2 = createStackNavigator<RootStackParams>();

const Tab2Navigator = () => (
  <Tab2.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFF' },
    }}
  >
    <Tab2.Screen name="Home" component={SearchScreen} />
    <Tab2.Screen name="Pokemon" component={PokemonScreen} />
  </Tab2.Navigator>
);

export const BottomTabsNavigator = () => {
  return (
    <NavigationContainer>
      <Tab1.Navigator
        sceneContainerStyle={styles.root}
        screenOptions={{
          tabBarActiveTintColor: '#5856D6',
          tabBarLabelStyle: {
            marginBottom: Platform.OS === 'android' ? 10 : 0,
          },
          headerShown: false,
          tabBarStyle: {
            borderWidth: 0,
            elevation: 0,
            height: Platform.OS === 'android' ? 60 : 90,
            backgroundColor: 'rgba(255,255,255, 0.9)',
            position: 'absolute',
          },
        }}
      >
        <Tab1.Screen
          name="Stack"
          component={StackNavigator}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color }) => (
              <Icon color={color} size={25} name="list-outline" />
            ),
          }}
        />
        <Tab1.Screen
          name="Search"
          component={Tab2Navigator}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <Icon color={color} size={25} name="search-outline" />
            ),
          }}
        />
      </Tab1.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
  },
});
