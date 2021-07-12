import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1 } from '../screens/Page1';
import { Page2 } from '../screens/Page2';
import { Page3 } from '../screens/Page3';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="Page3" component={Page3} />
    </Stack.Navigator>
  );
};
