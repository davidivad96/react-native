import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios';
import { authReducer, AuthState } from './authReducer';
import {
  AuthStatus,
  LoginData,
  LoginResponse,
  SignupData,
  User,
} from '../../interfaces';
import cafeApi from '../../api/cafeApi';

type AuthContextProps = {
  token: string | null;
  user: User | null;
  status: AuthStatus;
  errorMsg: string;
  signup: (signupData: SignupData) => void;
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

  const signup = useCallback(
    async ({ nombre, correo, password }: SignupData) => {
      try {
        const { data } = await cafeApi.post<LoginResponse>('/usuarios', {
          nombre,
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
        await AsyncStorage.setItem('token', data.token);
      } catch (err) {
        const error = err as AxiosError;
        console.log('error: ', error.response?.data);
        dispatch({
          type: 'addError',
          payload: error.response?.data.msg || 'Incorrect information',
        });
      }
    },
    [],
  );

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
      await AsyncStorage.setItem('token', data.token);
    } catch (err) {
      const error = err as AxiosError;
      console.log('error: ', error.response?.data);
      dispatch({
        type: 'addError',
        payload: error.response?.data.msg || 'Incorrect information',
      });
    }
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'logout' });
  }, []);

  const removeError = useCallback(() => {
    dispatch({
      type: 'removeError',
    });
  }, []);

  const checkToken = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        return dispatch({ type: 'logout' });
      }
      const { data, status } = await cafeApi.get<LoginResponse>('/auth');
      if (status !== 200) {
        return dispatch({ type: 'logout' });
      }
      dispatch({
        type: 'auth',
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });
    } catch (error) {
      console.log('err: ', error);
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

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
