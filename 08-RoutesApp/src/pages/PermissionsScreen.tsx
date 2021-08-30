import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {
  const { permissions, requestLocationPermission } =
    useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text>Permissions screen</Text>
      <Button title="Permission" onPress={requestLocationPermission} />
      <Text style={styles.permissionsText}>
        Current location permissions:{' '}
        <Text style={styles.boldText}>{permissions.locationStatus}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionsText: {
    marginTop: 15,
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
