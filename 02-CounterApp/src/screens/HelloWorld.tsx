import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
  },
});
