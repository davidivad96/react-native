import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlackButton } from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {
  const { permissions, requestLocationPermission } =
    useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Location permissions are needed to access GPS
      </Text>
      <BlackButton onPress={requestLocationPermission} title="Permission" />
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
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  permissionsText: {
    marginTop: 15,
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
