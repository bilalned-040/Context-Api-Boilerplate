import React, { createContext, useState } from "react";

import { withAuthContext } from ".";

const { Provider, Consumer } = createContext();

export const withOrderContext = (Component) => (props) =>
  <Consumer>{(value) => <Component {...props} {...value} />}</Consumer>;

const initialState = { ordersLength: 3 };

export const OrderProvider = withAuthContext(({ children, ...authState }) => {
  const [state, setState] = useState({ ...initialState });
  return (
    <Provider
      value={{
        authState,
        ...state,
        setState,
      }}
    >
      {children}
    </Provider>
  );
});
