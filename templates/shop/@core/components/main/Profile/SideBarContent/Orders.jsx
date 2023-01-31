import React, { useState } from "react";
import Card from "../../../../UI/Card";
import CurrentOrders from "./Orders/CurrentOrders";
import OrdersActiveBrn from "./Orders/OrdersActiveBtn";

function Orders() {
  const orders = [];
  const [activeState, setActiveState] = useState("current");
  const changeActiveStateHandler = (data) => {
    setActiveState(data);
  };
  let content = "";
  switch (activeState) {
    case "orders":
      content = <Orders onChangeIndex={changeAxtiveIndexHandler} />;
      break;
    case "favorites":
      content = <Favorties onChangeIndex={changeAxtiveIndexHandler} />;
      break;
    case "recently_viewed":
      content = <RecentlyViewed onChangeIndex={changeAxtiveIndexHandler} />;
      break;
    default:
      content = <CurrentOrders />;
  }

  return (
    <Card>
      <OrdersActiveBrn
        activeState={activeState}
        onChangeState={changeActiveStateHandler}
      />
      <CurrentOrders item={orders} />
    </Card>
  );
}

export default Orders;
