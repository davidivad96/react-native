import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../themes/appTheme';
import { AuthContext } from '../context/Auth';

export const Settings = () => {
  const { authState } = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.globalMargin, marginTop: insets.top }}>
      <Text style={styles.title}>Settings screen</Text>
      <Text>{JSON.stringify(authState)}</Text>
    </View>
  );
};
