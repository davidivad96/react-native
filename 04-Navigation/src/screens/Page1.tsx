import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles, colors } from '../themes/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1 = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.globalMargin}
        >
          <Icon name="menu-outline" color={colors.primary} size={30} />
        </TouchableOpacity>
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
          <Icon name="body-outline" color={colors.white} size={30} />
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
          <Icon name="woman-outline" color={colors.white} size={30} />
          <Text style={styles.bigButtonText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
