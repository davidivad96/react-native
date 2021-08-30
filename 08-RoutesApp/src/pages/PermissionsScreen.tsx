import React from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import {
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';

export const PermissionsScreen = () => {
  const requestLocationPermission = async () => {
    const permissionStatus: PermissionStatus =
      Platform.OS === 'ios'
        ? await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        : await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    console.log('PERMISSION: ', permissionStatus);
  };

  return (
    <View style={styles.container}>
      <Text>Permissions screen</Text>
      <Button title="Permission" onPress={requestLocationPermission} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
