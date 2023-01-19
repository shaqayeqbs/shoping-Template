import Head from "next/head";
import ArticleDetails from "../../@core/components/main/shop/DetailPage/ArticleDetails";
import { getArticlesById } from "../../@core/data/articles";
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
      <div>
        <ArticleDetails item={item} />
      </div>
    </div>
  );
};

export default ProductsDetailPage;

export async function getServerSideProps(context) {
  const { params } = context;
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
