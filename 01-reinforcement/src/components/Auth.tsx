import { useEffect, useReducer } from "react";

interface AuthState {
  isValidating: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState: AuthState = {
  isValidating: true,
  token: null,
  username: "",
  name: "",
};

type LoginPayload = {
  username: string;
  name: string;
};
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        isValidating: false,
        token: null,
        username: "",
        name: "",
      };

    case "login":
      const { username, name } = action.payload;
      return {
        isValidating: false,
        token: "ABC123",
        username,
        name,
      };

    default:
      return state;
  }
};

export const Auth = () => {
  const [{ isValidating, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 3000);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { name: "David", username: "davidivad96" },
    });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <>
      <h3>Auth</h3>
      {isValidating ? (
        <div className="alert alert-info">Validating...</div>
      ) : (
        <>
          {token ? (
            <>
              <div className="alert alert-success">Authenticated as {name}</div>
              <button className="btn btn-primary" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="alert alert-danger">Not authenticated</div>
              <button className="btn btn-primary me-2" onClick={login}>
                Login
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};
