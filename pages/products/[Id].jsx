// import ProductsDetail from "../../@core/components/main/shop/DetailPage/ProductsDetail";

import { getSpecifiedProducts } from "../../@core/api/productApi";
// import dynamic from "next/dynamic";
// const ShopProductsDetailPage = dynamic(() =>
//   import("../../templates/shop/pages/products/ShopDetail")
// );
import ShopProductsDetailPage from "../../templates/shop/pages/products/ShopDetail";

const ProductsDetailPage = ({ item = null }) => {
  console.log({ item });
  if (!item || item?.lenght === 0) {
    return <p>No Products found!</p>;
  }

  return (
    <div>
      <div>
        <ShopProductsDetailPage item={item} />
      </div>
    </div>
  );
};

export default ProductsDetailPage;

export async function getServerSideProps(context) {
  const { params, res } = context;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );
  const Id = params?.Id;

  const product = await getSpecifiedProducts(Id);
  console.log(product, "kkkkkkkkkkkkkkkkk");
  if (!product.data.data) {
    return { notFound: true };
  }

  return {
    props: {
      item: product?.data?.data,
    },
  };
}
