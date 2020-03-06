import React, { useReducer, createContext } from 'react';

const initialAuthState = {
  isAuthenticated: false,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      debugger
      return {
        isAuthenticated: true,
      }

    case 'LOGOUT':
      debugger
      return {
        isAuthenticated: false,
      }

    case 'REGISTER':
      debugger
      return {
        isAuthenticated: true,
      }

    default:
      return state;

  }
}

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const authHook = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={authHook}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
