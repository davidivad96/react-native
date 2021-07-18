import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../themes/appTheme';

export const Tab1 = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab1</Text>
      <Icon name="airplane-outline" size={60} color="#900" />
    </View>
  );
};
