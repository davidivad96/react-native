import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1 = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2')}
      />
      <Text>Navigate with params</Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Person', {
              id: 1,
              name: 'Pedro',
            })
          }
          style={[styles.bigButton, styles.bigButtonColor1]}
        >
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Person', {
              id: 2,
              name: 'María',
            })
          }
          style={[styles.bigButton, styles.bigButtonColor2]}
        >
          <Text style={styles.bigButtonText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
