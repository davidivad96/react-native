import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Background = () => {
  return <View style={styles.background} />;
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#5856D6',
    position: 'absolute',
    width: width * 2,
    height: height * 2,
    top: -height / 1.6,
    transform: [
      {
        rotate: '-70deg',
      },
    ],
  },
});
