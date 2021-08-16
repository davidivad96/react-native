import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  return (
    <View>
      <Text>Home screen</Text>
      <Icon name="star-outline" size={25} color="red" />
    </View>
  );
};
