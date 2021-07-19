import { AuthState } from './Auth';

type AuthAction = {
  type: 'signIn';
};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'unknown',
      };
    default:
      return state;
  }
};
