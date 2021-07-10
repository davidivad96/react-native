import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Task1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.cyanBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
  purpleBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#FFF',
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#FFF',
    backgroundColor: '#F0A23B',
    flex: 1,
  },
  cyanBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#FFF',
    backgroundColor: '#28C4D9',
  },
});
