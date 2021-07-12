import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3 = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Page 3</Text>
      <Button title="Go to top" onPress={() => navigation.popToTop()} />
    </View>
  );
};
