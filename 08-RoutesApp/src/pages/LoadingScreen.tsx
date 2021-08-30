import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const LoadingScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator size={50} color="blue" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
