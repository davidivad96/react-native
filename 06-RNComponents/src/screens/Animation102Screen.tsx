import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  purpleBox: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});
