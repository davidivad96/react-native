import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Platform, AppState } from 'react-native';
import {
  check,
  request,
  openSettings,
  PERMISSIONS,
  PermissionStatus,
} from 'react-native-permissions';

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

  const requestLocationPermission = useCallback(async () => {
    const permissionStatus: PermissionStatus =
      Platform.OS === 'ios'
        ? await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        : await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (permissionStatus === 'blocked') {
      openSettings();
    }
    setPermissions(currentPermissions => ({
      ...currentPermissions,
      locationStatus: permissionStatus,
    }));
  }, []);

  const checkLocationPermission = useCallback(async () => {
    const permissionStatus: PermissionStatus =
      Platform.OS === 'ios'
        ? await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        : await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    setPermissions(currentPermissions => ({
      ...currentPermissions,
      locationStatus: permissionStatus,
    }));
  }, []);

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state === 'active') {
        checkLocationPermission();
      }
    });
  }, [checkLocationPermission]);

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
