import React, { createContext, useCallback, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  setUsername: (username: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = useCallback(() => {
    dispatch({ type: 'signIn' });
  }, []);

  const logOut = useCallback(() => {
    dispatch({ type: 'logOut' });
  }, []);

  const changeFavoriteIcon = useCallback((iconName: string) => {
    dispatch({ type: 'changeFavIcon', payload: iconName });
  }, []);

  const setUsername = useCallback((username: string) => {
    dispatch({ type: 'setUsername', payload: username });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logOut,
        changeFavoriteIcon,
        setUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
