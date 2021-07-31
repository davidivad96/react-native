import React from 'react';
import { View, StyleSheet } from 'react-native';

export const FlatListSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 2,
    opacity: 0.4,
    marginVertical: 3,
  },
});
