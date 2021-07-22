import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

export const DetailScreen = ({ route }: Props) => {
  const movie = route.params;
  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  );
};
