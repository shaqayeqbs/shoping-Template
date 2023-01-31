import React from "react";
import { GetArticles, getBussinessGallery } from "../../@core/api/articlesApi";

import mainData from "../../@core/utils/serverProps";
import nookies from "nookies";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";

import dynamic from "next/dynamic";

const ShopArticles = dynamic(() =>
  import("../../templates/shop/pages/articles/ShopArticles")
);

function Articles({ data, articles }) {
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

  let bussinessData = {};
  if (!cookies?.id) {
    bussinessData = await mainData(ctx);
    // id = bussinessData.data.data.domin.business.id;
  }

  let res = await GetArticles(cookies?.id);
  let gallery = await getBussinessGallery(cookies?.id);

  // console.log(cookies.id, ";;;;;;;;;", gallery);
  return {
    props: {
      articles: res.data || null,
      data: bussinessData.data || null,
      gallery: gallery?.data || null,
    },
  };
};
