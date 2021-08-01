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

  const showPrompt = () => {
    Alert.prompt(
      'Are you sure?',
      'This action can not be reverted',
      (value: string) => {
        console.log('value', value);
      },
      'login-password',
    );
  };

  return (
    <View
      style={[styles.container, appTheme.container, { marginTop: top + 20 }]}
    >
      <HeaderTitle text="Alerts" color="#5856D6" />
      <Button title="Show Alert" onPress={showAlert} />
      <Button title="Show Prompt (only iOS)" onPress={showPrompt} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
