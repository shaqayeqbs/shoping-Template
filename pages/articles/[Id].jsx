import axios from "axios";
import Head from "next/head";
import APP_CONFIG from "../../@core/constants/app-config";
import END_POINTS from "../../@core/constants/endpoints";
import dynamic from "next/dynamic";
import mainData from "../../@core/utils/serverProps";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";
const ShopArticleDetailPage = dynamic(() =>
  import("../../templates/shop/pages/articles/ShopArticleDetail")
);
// import ShopArticleDetailPage from "../../templates/shop/pages/articles/ShopArticleDetail";

const ProductsDetailPage = ({ articleData, data }) => {
  useSetBussinessData(data);
  return (
    <div className="container !py-10">
      <Head>
        <title>{articleData?.title}</title>
        <meta
          name="description"
          content={articleData?.editors
            ?.find((editor) => editor.type === 2)
            ?.value?.slice(0, 160)}
        />
      </Head>
      <ShopArticleDetailPage item={articleData.editors} />
    </div>
  );
};

export default ProductsDetailPage;

export const getServerSideProps = async (ctx) => {
  const { res } = ctx;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );

  let bussinessData = {};
  // if (!cookies?.id) {
  bussinessData = await mainData(ctx);

  let result = await axios(
    `${APP_CONFIG.apiBaseUrl}${END_POINTS.getSpecifiedCurrentBusinessArticle}/${ctx.params.Id}`
  ).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return { notFound: true };
    }
  });

  if (!result || result.status !== 200) {
    return { notFound: true };
  }

  return {
    props: {
      articleData: result?.data?.data?.article || null,
      data: bussinessData.data || null,
    },
  };
};
