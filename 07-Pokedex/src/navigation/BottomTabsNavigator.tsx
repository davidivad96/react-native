import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';
import { SearchScreen } from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
        <Tab.Screen
          name="Stack"
          component={StackNavigator}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color }) => (
              <Icon color={color} size={25} name="list-outline" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <Icon color={color} size={25} name="search-outline" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
  },
});
