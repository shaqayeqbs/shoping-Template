// import ProductsDetail from "../../@core/components/main/shop/DetailPage/ProductsDetail";
import { getProductsById } from "../../@core/data/products";
import dynamic from "next/dynamic";
// const ProductsDetail = dynamic(() =>
//   import("../../@core/components/main/shop/DetailPage/ProductsDetail")
// );
import ProductsDetail from "../../@core/components/main/shop/DetailPage/ProductsDetail";
const ShopProductsDetailPage = ({ item }) => {
  if (!item || item.lenght === 0) {
    return <p>No Products found!</p>;
  }

  return (
    <div>
      <div>
        <ProductsDetail item={item} />
      </div>
    </div>
  );
};

export default ShopProductsDetailPage;
