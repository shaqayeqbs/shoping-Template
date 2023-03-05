import React from "react";
getSpecifiedProducts;

import dynamic from "next/dist/shared/lib/dynamic";
import { getSpecifiedProducts } from "../../@core/api/productApi";
const ShopComparison = dynamic(() =>
  import("../../templates/shop/pages/products/Comparison")
);

function Comparison({ product }) {
  console.log({ product });
  return (
    <section className="container">
      <ShopComparison product={product} />
    </section>
  );
}

export default Comparison;

export const getServerSideProps = async (ctx) => {
  const id = ctx.query?.id;
  const { res } = ctx;
  console.log(id, "iddddddddddddddddddddddd");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );

  let product = await getSpecifiedProducts(id);
  console.log(product, "wwwwwwww");

  return {
    props: {
      product: product?.data?.data?.inventory || null,
    },
  };
};
