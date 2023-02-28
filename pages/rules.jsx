import dynamic from "next/dynamic";

const ShopRules = dynamic(() => import("../templates/shop/pages/ShopRules"));
// import ShopRules from "../templates/shop/pages/ShopRules";
function Rules() {
  return (
    <>
      <ShopRules />
    </>
  );
}

export default Rules;
