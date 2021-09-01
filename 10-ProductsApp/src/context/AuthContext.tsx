import React, { createContext, useReducer, useCallback } from 'react';
import { authReducer, AuthState } from './authReducer';
import { AuthStatus, User } from '../interfaces';

type AuthContextProps = {
  token: string | null;
  user: User | null;
  status: AuthStatus;
  errorMsg: string;
  signup: () => void;
  login: () => void;
  logout: () => void;
  removeError: () => void;
};

const initialState: AuthState = {
  token: null,
  user: null,
  status: 'checking',
  errorMsg: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signup = useCallback(() => {}, []);
  const login = useCallback(() => {}, []);
  const logout = useCallback(() => {}, []);
  const removeError = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signup,
        login,
        logout,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
