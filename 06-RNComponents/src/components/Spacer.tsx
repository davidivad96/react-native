import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Spacer = () => <View style={styles.flexOne} />;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});
