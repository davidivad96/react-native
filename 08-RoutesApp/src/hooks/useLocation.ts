import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    getCurrentPosition()
      .then(location => {
        setInitialPosition(location);
        setHasLocation(true);
      })
      .catch(error => console.log('error: ', error));
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

  return {
    hasLocation,
    initialPosition,
    getCurrentPosition,
  };
};
