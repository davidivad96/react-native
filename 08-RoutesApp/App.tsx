import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { MainNavigator } from './src/navigation/MainNavigator';
import { PermissionsProvider } from './src/context/PermissionsContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PermissionsProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </PermissionsProvider>
  );
};

export default App;
