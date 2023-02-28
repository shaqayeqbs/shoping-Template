import axios from "axios";
import Head from "next/head";
import nookies from "nookies";
import APP_CONFIG from "../../@core/constants/app-config";
import END_POINTS from "../../@core/constants/endpoints";
import dynamic from "next/dynamic";

const ShopArticleDetailPage = dynamic(() =>
  import("../../templates/shop/pages/articles/ShopArticleDetail")
);
// import ShopArticleDetailPage from "../../templates/shop/pages/articles/ShopArticleDetail";

const ProductsDetailPage = ({ articleData }) => {
  return (
    <div className=" !py-10">
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
  const cookies = nookies.get(ctx);
  const { res, req } = ctx;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );

  let url = req.headers.host;
  if (
    url === "localhost:3000" ||
    url === "localhost:3001" ||
    url === "localhost:3002"
  ) {
    url = "tivarja.ir";
  }

  let id = cookies?.id;

  if (!cookies || !cookies.id) {
    const response = await axios(
      `http://core.behzi.net/api/business/byDomin/${url}?lang=fa`
    ).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return { notFound: true };
      }
    });
    id = response.data.data.domin.business.id;
    console.log(response.data.data.domin.business.id);
  }

  let result = await axios(
    `${APP_CONFIG.apiBaseUrl}${END_POINTS.getSpecifiedCurrentBusinessArticle}/${id}/${ctx.params.Id}`
  ).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return { notFound: true };
    }
  });

  return {
    props: {
      articleData: result?.data?.data?.article || null,
    },
  };
};
