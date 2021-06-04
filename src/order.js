import React from "react";
import { withOrderContext } from "./context";

function Order({ordersLength, authState: { message, ...authState }}) {
  console.log({authState})
  return (
    <div>
      <h3>new Message: {message}</h3>
      <h3>Number of orders are : {ordersLength}</h3>
    </div>
  );
}

export default withOrderContext(Order);
