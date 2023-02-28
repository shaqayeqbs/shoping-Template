import React from "react";
import { GetArticles, getBussinessGallery } from "../../@core/api/articlesApi";
import mainData from "../../@core/utils/serverProps";
import nookies from "nookies";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";
import dynamic from "next/dynamic";

const ShopArticles = dynamic(() =>
  import("../../templates/shop/pages/articles/ShopArticles")
);

// import ShopArticles from "../../templates/shop/pages/articles/ShopArticles";
function Articles({ data, articles }) {
  console.log(data, articles, "art");
  useSetBussinessData(data);

  return (
    <>
      <ShopArticles data={data} articles={articles} />
    </>
  );
}

export default Articles;
export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const { res } = ctx;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=3600"
  );

  let bussinessData = {};
  if (!cookies?.id) {
    bussinessData = await mainData(ctx);
  }

  let result = await GetArticles(cookies?.id);

  let gallery = await getBussinessGallery(cookies?.id);

  return {
    props: {
      articles: result.data,
      data: bussinessData.data || null,
      gallery: gallery?.data || null,
    },
  };
};
