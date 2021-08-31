import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { SignupScreen } from '../screens/SignupScreen';
import { ProtectedScreen } from '../screens/ProtectedScreen';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Protected" component={ProtectedScreen} />
    </Stack.Navigator>
  );
};
