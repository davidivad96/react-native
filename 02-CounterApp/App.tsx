import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import { HelloWorld } from './src/screens/HelloWorld';
import { Counter } from './src/screens/Counter';
// import { Task1 } from './src/screens/Tasks/Task1';
// import { Task2 } from './src/screens/Tasks/Task2';
// import { Task3 } from './src/screens/Tasks/Task3';
// import { Task4 } from './src/screens/Tasks/Task4';
// import { Task5 } from './src/screens/Tasks/Task5';
// import { Task6 } from './src/screens/Tasks/Task6';
// import { Task7 } from './src/screens/Tasks/Task7';
// import { Task8 } from './src/screens/Tasks/Task8';
// import { Task9 } from './src/screens/Tasks/Task9';
// import { Task10 } from './src/screens/Tasks/Task10';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <HelloWorld /> */}
      <Counter />
      {/* <Task1 /> */}
      {/* <Task2 /> */}
      {/* <Task3 /> */}
      {/* <Task4 /> */}
      {/* <Task5 /> */}
      {/* <Task6 /> */}
      {/* <Task7 /> */}
      {/* <Task8 /> */}
      {/* <Task9 /> */}
      {/* <Task10 /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
