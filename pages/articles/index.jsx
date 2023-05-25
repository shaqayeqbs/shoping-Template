import React from "react";
// import { GetArticles, getBussinessGallery } from "../../@core/api/articlesApi";
// import mainData from "../../@core/utils/serverProps";
// import nookies from "nookies";
// import useSetBussinessData from "../../@core/hooks/useSetBussinessData";
// import dynamic from "next/dynamic";
import { ArticlesData } from "../../@core/data/articles";
import bussinessDa from "../../@core/data/business.json";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";
// const ShopArticles = dynamic(() =>
//   import("../../templates/shop/pages/articles/ShopArticles")
// );

import ShopArticles from "../../templates/shop/pages/articles/ShopArticles";
function Articles({ articles, data }) {
  useSetBussinessData(data);
  return (
    <>
      <ShopArticles articles={articles} />
    </>
  );
}

export default Articles;
export const getServerSideProps = async (ctx) => {
  // const cookies = nookies.get(ctx);
  // const { res } = ctx;
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=43200, stale-while-revalidate=3600"
  // );

  // let bussinessData = {};

  // bussinessData = await mainData(ctx);

  // let result = await GetArticles(cookies?.id);
  let bussinessData = bussinessDa;
  // let gallery = await getBussinessGallery(cookies?.id);

  return {
    props: {
      articles: ArticlesData,
      data: bussinessData[0]?.business || null,
      gallery: ArticlesData || null,
    },
  };
};
