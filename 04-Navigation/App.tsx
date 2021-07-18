import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { BasicDrawerNavigator } from './src/navigator/BasicDrawerNavigator';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicDrawerNavigator /> */}
      <DrawerNavigator />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
