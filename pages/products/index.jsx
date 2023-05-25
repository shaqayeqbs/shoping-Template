import React, { memo } from "react";
// import dynamic from "next/dynamic";
// import nookies from "nookies";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";
// import mainData from "../../@core/utils/serverProps";
import bussinessDa from "../../@core/data/business.json";
// import { getListOfProducts } from "../../@core/api/productApi";
import { ProductsData } from "../../@core/data/products";
import dynamic from "next/dynamic";
const ShopAllProducts = dynamic(() =>
  import("../../templates/shop/pages/products/ShopProducts")
);
// import ShopAllProducts from "../../templates/shop/pages/products/ShopProducts";

function AllProducts({ data, products }) {
  useSetBussinessData(data);

  return (
    <>
      <ShopAllProducts products={products} />
    </>
  );
}

export default memo(AllProducts);

export const getServerSideProps = async (ctx) => {
  // const cookies = nookies.get(ctx);
  // const { res } = ctx;
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=43200, stale-while-revalidate=3600"
  // );
  let bussinessData = {};
  bussinessData = bussinessDa;

  // bussinessData = await mainData(ctx);

  // let result = await getListOfProducts(cookies?.id);
  let result = ProductsData;
  return {
    props: {
      products: result || null,
      data: bussinessData[0]?.business || null,
    },
  };
};
