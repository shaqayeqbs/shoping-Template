import React from "react";
import EmptyOrders from "./EmptyOrders";

function CurrentOrders({ item }) {
  if (!item.length) {
    return <EmptyOrders />;
  }
  return <div>CurrentOrders</div>;
}

export default CurrentOrders;
