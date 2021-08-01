import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { appTheme } from '../theme/appTheme';

export const AlertScreen = () => {
  const { top } = useSafeAreaInsets();

  const showAlert = () => {
    Alert.alert(
      'Title',
      'This is the message',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel Pressed');
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed');
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          console.log('onDismiss');
        },
      },
    );
  };

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <HeaderTitle text="Alerts" color="#5856D6" />
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
