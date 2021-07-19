import { AuthState, authInitialState } from './Auth';

type AuthAction =
  | { type: 'signIn' }
  | { type: 'changeFavIcon'; payload: string }
  | { type: 'logOut' }
  | { type: 'setUsername'; payload: string };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'davidivad96',
      };
    case 'logOut':
      return { ...authInitialState };
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'setUsername':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
