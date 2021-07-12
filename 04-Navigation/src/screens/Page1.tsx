import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1 = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Page 1</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2')}
      />
    </View>
  );
};
