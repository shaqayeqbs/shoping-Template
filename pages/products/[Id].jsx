import Head from "next/head";
import ProductsDetail from "../../@core/components/main/shop/DetailPage/ProductsDetail";
import { getProductsById } from "../../@core/data/products";

const ProductsDetailPage = ({ item }) => {
  if (!item || item.lenght === 0) {
    return <p>No Products found!</p>;
  }

  return (
    <div>
      <Head>
        <title>Detail Page</title>
        <meta name="description" content="Jewlery store for final project" />
      </Head>
      <div>
        <ProductsDetail item={item} />
      </div>
    </div>
  );
};

export default ProductsDetailPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const Id = params.Id;

  const product = await getProductsById(Id);
  console.log({ product });
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      item: product,
    },
  };
}
