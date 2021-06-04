import React, { createContext, useState } from "react";

const { Provider, Consumer } = createContext();

export const withAuthContext = (Component) => (props) =>
  <Consumer>{(value) => <Component {...props} {...value} />}</Consumer>;

const initialState = { message: "hello" };

export function AuthProvider({ children }) {
  const [state, setState] = useState({ ...initialState });
  return (
    <Provider
      value={{
        ...state,
        setState,
      }}
    >
      {children}
    </Provider>
  );
}
