import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1 } from '../screens/Page1';
import { Page2 } from '../screens/Page2';
import { Page3 } from '../screens/Page3';
import { Person } from '../screens/Person';

export type RootStackParams = {
  Page1: undefined;
  Page2: undefined;
  Page3: undefined;
  Person: { id: number; name: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}
    >
      <Stack.Screen
        name="Page1"
        options={{ title: 'Page 1' }}
        component={Page1}
      />
      <Stack.Screen
        name="Page2"
        options={{ title: 'Hello World', headerBackTitle: 'Back' }}
        component={Page2}
      />
      <Stack.Screen
        name="Page3"
        options={{ title: 'Page 3' }}
        component={Page3}
      />
      <Stack.Screen
        name="Person"
        options={{ title: 'Person' }}
        component={Person}
      />
    </Stack.Navigator>
  );
};
