import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Task6 = () => {
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
    height: 100,
    borderWidth: 10,
    borderColor: '#FFF',
    backgroundColor: '#5856D6',
    flex: 2.5,
    alignSelf: 'stretch',
  },
  orangeBox: {
    height: 100,
    borderWidth: 10,
    borderColor: '#FFF',
    backgroundColor: '#F0A23B',
    flex: 2.5,
    alignSelf: 'stretch',
  },
  cyanBox: {
    height: 100,
    borderWidth: 10,
    borderColor: '#FFF',
    backgroundColor: '#28C4D9',
    flex: 5,
    alignSelf: 'stretch',
  },
});
