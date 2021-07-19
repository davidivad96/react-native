import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1 = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.globalMargin, marginTop: top + 10 }}>
      <Text style={styles.title}>Icons</Text>
      <TouchableIcon iconName="airplane-outline" />
      <TouchableIcon iconName="attach-outline" />
      <TouchableIcon iconName="bonfire-outline" />
      <TouchableIcon iconName="calculator-outline" />
      <TouchableIcon iconName="chatbubble-ellipses-outline" />
    </View>
  );
};
