import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Map } from '../components/Map';

export const MapScreen = () => (
  <View style={styles.container}>
    <Map
      markers={[
        {
          location: {
            latitude: 37.78825,
            longitude: -122.4324,
          },
          title: 'Marker title',
          description: 'Marker description',
        },
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
