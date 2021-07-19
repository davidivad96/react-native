import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { useEffect } from 'react';
import { AuthContext } from '../context/Auth';

interface Props extends StackScreenProps<RootStackParams, 'Person'> {}

export const Person = ({ route, navigation }: Props) => {
  const { setUsername } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, [navigation, route.params.name]);

  useEffect(() => {
    setUsername(route.params.name);
  }, [route.params.name, setUsername]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Person:</Text>
      <Text>{JSON.stringify(route.params, null, 2)}</Text>
    </View>
  );
};
