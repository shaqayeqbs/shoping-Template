import dynamic from "next/dynamic";

const ShopAbout = dynamic(() => import("../templates/shop/pages/ShopAboutUs"));
function aboutUs() {
  return (
    <>
      <ShopAbout />
    </>
  );
}

export default aboutUs;
