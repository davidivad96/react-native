import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../themes/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1 = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.globalMargin, marginTop: top + 10 }}>
      <Text style={styles.title}>Icons</Text>
      <Icon name="airplane-outline" size={60} color={colors.primary} />
      <Icon name="attach-outline" size={60} color={colors.primary} />
      <Icon name="bonfire-outline" size={60} color={colors.primary} />
      <Icon name="calculator-outline" size={60} color={colors.primary} />
      <Icon
        name="chatbubble-ellipses-outline"
        size={60}
        color={colors.primary}
      />
    </View>
  );
};
