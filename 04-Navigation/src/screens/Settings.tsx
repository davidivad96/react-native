import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../themes/appTheme';

export const Settings = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.globalMargin, marginTop: insets.top }}>
      <Text style={styles.title}>Settings screen</Text>
    </View>
  );
};
