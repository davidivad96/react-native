import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Calculator } from './src/screens/Calculator';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
