import React, { useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { SignupScreen } from '../screens/SignupScreen';
import { ProtectedScreen } from '../screens/ProtectedScreen';
import { AuthContext } from '../context/Auth/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  const { status, errorMsg, removeError } = useContext(AuthContext);

  useEffect(() => {
    if (errorMsg.length) {
      Alert.alert('Signup failed', errorMsg, [
        { text: 'Ok', onPress: removeError },
      ]);
    }
  }, [errorMsg, removeError]);

  if (status === 'checking') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}
    >
      {status === 'authenticated' ? (
        <Stack.Screen name="Protected" component={ProtectedScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
