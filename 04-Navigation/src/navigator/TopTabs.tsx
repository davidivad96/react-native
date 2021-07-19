import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Chat } from '../screens/Chat';
import { Contacts } from '../screens/Contacts';
import { Albums } from '../screens/Albums';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../themes/appTheme';

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
              iconName = 'chatbox-ellipses-outline';
              break;
            case 'Contacts':
              iconName = 'people-outline';
              break;
            case 'Albums':
              iconName = 'albums-outline';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  );
};
