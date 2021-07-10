import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Task2 = () => {
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
    justifyContent: 'center',
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
  },
  cyanBox: {
    height: 100,
    borderWidth: 10,
    borderColor: '#FFF',
    backgroundColor: '#28C4D9',
    alignSelf: 'stretch',
  },
});
