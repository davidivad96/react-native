import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker as MarkerComponent } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { Marker } from '../interfaces/appInterfaces';
import { LoadingScreen } from '../pages/LoadingScreen';

interface Props {
  markers?: Marker[];
}

export const Map = ({ markers = [] }: Props) => {
  const { hasLocation, initialPosition } = useLocation();

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <MapView
      style={styles.map}
      showsUserLocation
      initialRegion={{
        latitude: initialPosition.latitude,
        longitude: initialPosition.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {markers.map(marker => (
        <MarkerComponent
          key={`${marker.location.latitude},${marker.location.longitude}`}
          coordinate={{
            latitude: marker.location.latitude,
            longitude: marker.location.longitude,
          }}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
