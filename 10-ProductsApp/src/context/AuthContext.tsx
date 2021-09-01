import React, { createContext, useReducer, useCallback } from 'react';
import { authReducer, AuthState } from './authReducer';
import { AuthStatus, LoginData, LoginResponse, User } from '../interfaces';
import cafeApi from '../api/cafeApi';

type AuthContextProps = {
  token: string | null;
  user: User | null;
  status: AuthStatus;
  errorMsg: string;
  signup: () => void;
  login: (loginData: LoginData) => void;
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

  const login = useCallback(async ({ correo, password }: LoginData) => {
    try {
      const { data } = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      dispatch({
        type: 'auth',
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });
    } catch (error) {
      console.log('error: ', error.response.data);
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Incorrect information',
      });
    }
  }, []);

  const logout = useCallback(() => {}, []);

  const removeError = useCallback(() => {
    dispatch({
      type: 'removeError',
    });
  }, []);

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
