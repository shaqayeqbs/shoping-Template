import React, { memo } from "react";
// import dynamic from "next/dynamic";
import nookies from "nookies";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";
import mainData from "../../@core/utils/serverProps";
import { getListOfProducts } from "../../@core/api/productApi";
// const ShopAllProducts = dynamic(() =>
//   import("../../templates/shop/pages/products/ShopProducts")
// );
import ShopAllProducts from "../../templates/shop/pages/products/ShopProducts";

function AllProducts({ data, products }) {
  console.log({ products }, "llllllllllllll");
  useSetBussinessData(data);

  return (
    <>
      <ShopAllProducts products={products} />
    </>
  );
}

export default memo(AllProducts);

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const { res } = ctx;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );
  let bussinessData = {};
  if (!cookies?.id) {
    bussinessData = await mainData(ctx);
  }
  let result = await getListOfProducts(cookies?.id);

  return {
    props: {
      products: result?.data?.data?.inventorys,
      data: bussinessData?.data || null,
    },
  };
};
