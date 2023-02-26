// import dynamic from "next/dynamic";

// const ShopBasket = dynamic(() => import("../templates/shop/pages/ShopBasket"));

import ShopBasket from "../templates/shop/pages/ShopBasket";

function Basket() {
  return (
    <>
      <ShopBasket />
    </>
  );
}

export default Basket;

export const getServerSideProps = async (ctx) => {
  const { res } = ctx;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );

  return {
    props: {
      questions: null,
    },
  };
};
