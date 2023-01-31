import React from "react";

import dynamic from "next/dynamic";
const ShopBasket = dynamic(() => import("../templates/shop/pages/ShopBasket"));

function Basket() {
  return (
    <>
      <ShopBasket />
    </>
  );
}

export default Basket;
