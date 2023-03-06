// import ProductsDetail from "../../@core/components/main/shop/DetailPage/ProductsDetail";
import nookies from "nookies";
import { getSpecifiedProducts } from "../../@core/api/productApi";
import dynamic from "next/dynamic";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";
import mainData from "../../@core/utils/serverProps";
const ShopProductsDetailPage = dynamic(() =>
  import("../../templates/shop/pages/products/ShopDetail")
);
// import ShopProductsDetailPage from "../../templates/shop/pages/products/ShopDetail";

const ProductsDetailPage = ({ data, item = null }) => {
  console.log({ data, item });
  useSetBussinessData(data);

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
  const cookies = nookies.get(context);
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );
  const Id = params?.Id;
  let bussinessData = {};

  bussinessData = await mainData(context);

  const product = await getSpecifiedProducts(Id);
  console.log(bussinessData, "kkkkkkkkkkkkkkkkk");
  if (!product.data.data) {
    return { notFound: true };
  }

  return {
    props: {
      item: product?.data?.data,
      data: bussinessData?.data || null,
    },
  };
}
