import { useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [userPosition, setUserPosition] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [routeLines, setRouteLines] = useState<Location[]>([]);
  const watchId = useRef<number>();
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      getCurrentPosition()
        .then(location => {
          setInitialPosition(location);
          setUserPosition(location);
          setRouteLines(currentRouteLines => [...currentRouteLines, location]);
          setHasLocation(true);
        })
        .catch(error => console.log('error: ', error));
    }
  }, []);

  const getCurrentPosition = (): Promise<Location> =>
    new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        err => reject({ err }),
        {
          enableHighAccuracy: true,
        },
      );
    });

  const followUserPosition = () => {
    if (isMounted.current) {
      watchId.current = Geolocation.watchPosition(
        ({ coords }) => {
          const location: Location = {
            latitude: coords.latitude,
            longitude: coords.longitude,
          };
          setUserPosition(location);
          setRouteLines(currentRouteLines => [...currentRouteLines, location]);
        },
        err => console.log('err: ', err),
        {
          enableHighAccuracy: true,
          distanceFilter: 10,
        },
      );
    }
  };

  const stopFollowUserPosition = () => {
    if (watchId.current) {
      Geolocation.clearWatch(watchId.current);
    }
  };

  return {
    hasLocation,
    initialPosition,
    userPosition,
    routeLines,
    getCurrentPosition,
    followUserPosition,
    stopFollowUserPosition,
  };
};
