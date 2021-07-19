import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { BasicDrawerNavigator } from './src/navigator/BasicDrawerNavigator';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
// import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/Auth';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* <StackNavigator /> */}
        {/* <BasicDrawerNavigator /> */}
        <DrawerNavigator />
        {/* <Tabs /> */}
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
