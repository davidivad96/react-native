import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Chat } from '../screens/Chat';
import { Contacts } from '../screens/Contacts';
import { Albums } from '../screens/Albums';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../themes/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop: top }}
      sceneContainerStyle={{ backgroundColor: colors.white }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        style: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'Ch';
              break;
            case 'Contacts':
              iconName = 'Co';
              break;
            case 'Albums':
              iconName = 'Al';
              break;
            default:
              break;
          }
          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}
    >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  );
};
