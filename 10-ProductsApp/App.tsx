import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigation/MainNavigator';
import { AuthProvider } from './src/context/Auth/AuthContext';
import { ProductsProvider } from './src/context/Products/ProductsContext';

const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <AuthProvider>
    <ProductsProvider>{children}</ProductsProvider>
  </AuthProvider>
);

const App = () => (
  <NavigationContainer>
    <AppState>
      <MainNavigator />
    </AppState>
  </NavigationContainer>
);

export default App;
