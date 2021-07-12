import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

export const Page2 = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2</Text>
      <Button
        title="Go to Page 3"
        onPress={() => navigator.navigate('Page3')}
      />
    </View>
  );
};
