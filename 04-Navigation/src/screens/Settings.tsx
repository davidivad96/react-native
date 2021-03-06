import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../themes/appTheme';
import { AuthContext } from '../context/Auth';

export const Settings = () => {
  const { authState } = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.globalMargin, marginTop: insets.top }}>
      <Text style={styles.title}>Settings screen</Text>
      <Text>{JSON.stringify(authState)}</Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};
