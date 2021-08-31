import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker as MarkerComponent } from 'react-native-maps';

interface Marker {
  latitude: number;
  longitude: number;
  title: string;
  description: string;
}

interface Props {
  markers?: Marker[];
}

export const Map = ({ markers = [] }: Props) => (
  <MapView style={styles.map} showsUserLocation>
    {markers.map(marker => (
      <MarkerComponent
        key={`${marker.latitude},${marker.longitude}`}
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude,
        }}
        title={marker.title}
        description={marker.description}
      />
    ))}
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
