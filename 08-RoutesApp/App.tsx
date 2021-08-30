import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigation/MainNavigator';
import { PermissionsProvider } from './src/context/PermissionsContext';

const App = () => {
  return (
    <PermissionsProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </PermissionsProvider>
  );
};

export default App;
