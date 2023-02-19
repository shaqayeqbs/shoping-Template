import Head from "next/head";
import ArticleDetails from "../../@core/components/main/shop/DetailPage/ArticleDetails";
import { getArticlesById } from "../../@core/data/articles";
import dynamic from "next/dynamic";

const ShopArticleDetailPage = dynamic(() =>
  import("../../templates/shop/pages/articles/ShopArticleDetail")
);

const ProductsDetailPage = ({ item }) => {
  if (!item || item.lenght === 0) {
    return <p>No Products found!</p>;
  }

  return (
    <div>
      <Head>
        <title>Article Detail Page</title>
        <meta name="description" content="Jewlery store for final project" />
      </Head>
      <ShopArticleDetailPage item={item} />
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
  const Id = params.Id;

  const article = await getArticlesById(Id);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      item: article,
    },
  };
}
