import React, { memo } from "react";
import dynamic from "next/dynamic";

const ShopAllProducts = dynamic(() =>
  import("../../templates/shop/pages/products/ShopProducts")
);
// import ShopAllProducts from "../../templates/shop/pages/products/ShopProducts";

function AllProducts() {
  return (
    <>
      <ShopAllProducts />
    </>
  );
}

export default memo(AllProducts);
