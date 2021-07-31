import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBox: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});
