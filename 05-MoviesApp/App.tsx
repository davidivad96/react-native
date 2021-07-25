import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigation/MainNavigator';
import { GradientProvider } from './src/context/GradientContext';
// import { FadeScreen } from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
        <MainNavigator />
        {/* <FadeScreen /> */}
      </GradientProvider>
    </NavigationContainer>
  );
};

export default App;
