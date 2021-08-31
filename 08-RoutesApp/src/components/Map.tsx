import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, {
  Marker as MarkerComponent,
  Polyline,
} from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { Marker } from '../interfaces/appInterfaces';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';

interface Props {
  markers?: Marker[];
}

export const Map = ({ markers = [] }: Props) => {
  const {
    hasLocation,
    initialPosition,
    userPosition,
    routeLines,
    getCurrentPosition,
    followUserPosition,
    stopFollowUserPosition,
  } = useLocation();
  const [showPolyline, setShowPolyline] = useState<boolean>(true);
  const mapViewRef = useRef<MapView>();
  const followingRef = useRef<boolean>(true);

  const centerPosition = async () => {
    const { latitude, longitude } = await getCurrentPosition();
    mapViewRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
    });
    followingRef.current = true;
  };

  const toggleShowPolyline = () => {
    setShowPolyline(currentShowPolyline => !currentShowPolyline);
  };

  useEffect(() => {
    followUserPosition();
    return () => {
      stopFollowUserPosition();
    };
  }, [followUserPosition, stopFollowUserPosition]);

  useEffect(() => {
    if (followingRef.current) {
      const { latitude, longitude } = userPosition;
      mapViewRef.current?.animateCamera({
        center: {
          latitude,
          longitude,
        },
      });
    }
  }, [userPosition]);

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        style={styles.map}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={el => (mapViewRef.current = el!)}
        onTouchStart={() => (followingRef.current = false)}
      >
        {showPolyline && (
          <Polyline
            coordinates={routeLines}
            strokeColor="blue"
            strokeWidth={3}
          />
        )}
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
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={styles.fabCompassButton}
      />
      <Fab
        iconName="brush-outline"
        onPress={toggleShowPolyline}
        style={styles.fabBrushButton}
      />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  fabCompassButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  fabBrushButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
  },
});
