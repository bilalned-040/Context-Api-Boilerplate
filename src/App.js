import React from "react";
import "./App.css";

import { withAuthContext, OrderProvider } from "./context";

import Order from './order';

function App({ message }) {
  return (
    <div>
      <h3>{message}</h3>
      <OrderProvider>
        <Order />
      </OrderProvider>
    </div>
  );
}

export default withAuthContext(App);
