import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import { HelloWorld } from './src/screens/HelloWorld';
import { Counter } from './src/screens/Counter';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <HelloWorld /> */}
      <Counter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
