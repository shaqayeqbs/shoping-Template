// import ProductsDetail from "../../@core/components/main/shop/DetailPage/ProductsDetail";
import { getProductsById } from "../../@core/data/products";
import dynamic from "next/dynamic";
const ShopProductsDetailPage = dynamic(() =>
  import("../../templates/shop/pages/products/ShopDetail")
);

const ProductsDetailPage = ({ item }) => {
  if (!item || item.lenght === 0) {
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
    "public, s-maxage=43200, stale-while-revalidate=60"
  );
  const Id = params.Id;

  const product = await getProductsById(Id);
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      item: product,
    },
  };
}
