import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1 } from '../screens/Tab1';
import { StackNavigator } from './StackNavigator';
import { colors } from '../themes/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabs } from './TopTabs';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'bandage-outline';
              break;
            case 'Tab2':
              iconName = 'basketball-outline';
              break;
            case 'Stack':
              iconName = 'bookmarks-outline';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}
    >
      <BottomTabIOS.Screen
        name="Tab1"
        component={Tab1}
        options={{ title: 'Tab1' }}
      />
      <BottomTabIOS.Screen
        name="Tab2"
        component={TopTabs}
        options={{ title: 'Tab2' }}
      />
      <BottomTabIOS.Screen
        name="Stack"
        component={StackNavigator}
        options={{ title: 'Stack' }}
      />
    </BottomTabIOS.Navigator>
  );
};

const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'bandage-outline';
              break;
            case 'Tab2':
              iconName = 'basketball-outline';
              break;
            case 'Stack':
              iconName = 'bookmarks-outline';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}
    >
      <BottomTabAndroid.Screen
        name="Tab1"
        component={Tab1}
        options={{ title: 'Tab1' }}
      />
      <BottomTabAndroid.Screen
        name="Tab2"
        component={TopTabs}
        options={{ title: 'Tab2' }}
      />
      <BottomTabAndroid.Screen
        name="Stack"
        component={StackNavigator}
        options={{ title: 'Stack' }}
      />
    </BottomTabAndroid.Navigator>
  );
};
