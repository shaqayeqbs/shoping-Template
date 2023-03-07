import React from "react";
getSpecifiedProducts;

import dynamic from "next/dist/shared/lib/dynamic";
import {
  getSpecifiedProducts,
  getListOfProducts,
} from "../../@core/api/productApi";
import mainData from "../../@core/utils/serverProps";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";
import List from "../../templates/shop/@core/components/main/Slider/List";
const ShopComparison = dynamic(() =>
  import("../../templates/shop/pages/products/Comparison")
);

function Comparison({ product, ListOFProduct, data }) {
  console.log({ ListOFProduct }, "listtttttttt");
  useSetBussinessData(data);
  return (
    <section className="container">
      <ShopComparison product={product} ListOFProduct={ListOFProduct} />
    </section>
  );
}

export default Comparison;

export const getServerSideProps = async (ctx) => {
  const id = ctx.query?.id;
  const { res } = ctx;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );
  let bussinessData = {};

  bussinessData = await mainData(ctx);

  const Busiinessid = bussinessData?.data.data.domin.business.id;
  let product = await getSpecifiedProducts(id);
  const limit = 12;
  let ListOFProduct = await getListOfProducts(Busiinessid, limit);

  return {
    props: {
      product: product?.data?.data?.inventory || null,
      ListOFProduct: ListOFProduct?.data?.data || null,
      data: bussinessData?.data || null,
    },
  };
};
