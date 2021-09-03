import { AuthStatus, User } from '../../interfaces';

export interface AuthState {
  token: string | null;
  user: User | null;
  status: AuthStatus;
  errorMsg: string;
}

type AuthAction =
  | { type: 'auth'; payload: { token: string; user: User } }
  | { type: 'addError'; payload: string }
  | { type: 'removeError' }
  | { type: 'logout' };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        token: null,
        user: null,
        status: 'non-authenticated',
        errorMsg: action.payload,
      };
    case 'removeError':
      return {
        ...state,
        errorMsg: '',
      };
    case 'auth':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        status: 'authenticated',
        errorMsg: '',
      };
    case 'logout':
      return {
        ...state,
        token: null,
        user: null,
        status: 'non-authenticated',
      };
    default:
      return { ...state };
  }
};
