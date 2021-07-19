import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../themes/appTheme';
import { AuthContext } from '../context/Auth';

export const Contacts = () => {
  const { authState, signIn } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts</Text>
      {!authState.isLoggedIn && <Button onPress={signIn} title="SignIn" />}
    </View>
  );
};
