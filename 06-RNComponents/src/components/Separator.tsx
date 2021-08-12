import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

export const Separator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={{ ...styles.separator, borderBottomColor: theme.dividerColor }}
    />
  );
};

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
