import dynamic from "next/dynamic";
import { memo } from "react";
import { getListOfOffProducts } from "../@core/api/productApi";
import nookies from "nookies";
import useSetBussinessData from "../@core/hooks/useSetBussinessData";
// import mainData from "../@core/utils/serverProps";
import bussinessDa from "../@core/data/business.json";
const ShopOffer = dynamic(() => import("../templates/shop/pages/ShopOffer"));
// import ShopOffer from "../templates/shop/pages/ShopOffer";

function Offer({ data, products }) {
  useSetBussinessData(data);
  return (
    <>
      <ShopOffer products={products} />
    </>
  );
}

export default memo(Offer);

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const { res } = ctx;
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=43200, stale-while-revalidate=3600"
  // );
  let bussinessData = bussinessDa;

  // bussinessData = await mainData(ctx);

  let result = await getListOfOffProducts(cookies?.id);

  console.log({ result }), "kkkkkkkkkkk";

  return {
    props: {
      products: result?.data?.data?.inventorys || null,
      data: bussinessData[0]?.business || null,
    },
  };
};
