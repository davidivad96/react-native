import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { useEffect } from 'react';

interface Props extends StackScreenProps<RootStackParams, 'Person'> {}

export const Person = ({ route, navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, [navigation, route.params.name]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Person:</Text>
      <Text>{JSON.stringify(route.params, null, 2)}</Text>
    </View>
  );
};
