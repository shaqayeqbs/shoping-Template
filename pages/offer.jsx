import dynamic from "next/dynamic";
import { memo } from "react";

const ShopOffer = dynamic(() => import("../templates/shop/pages/ShopOffer"));

function Offer() {
  return (
    <>
      <ShopOffer />
    </>
  );
}

export default memo(Offer);
