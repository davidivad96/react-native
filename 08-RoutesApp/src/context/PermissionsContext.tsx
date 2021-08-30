import React, { createContext, useCallback, useState } from 'react';
import { PermissionStatus } from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  requestLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [permissions, setPermissions] = useState(permissionsInitState);

  const requestLocationPermission = useCallback(() => {}, []);

  const checkLocationPermission = useCallback(() => {}, []);

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        requestLocationPermission,
        checkLocationPermission,
      }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};
