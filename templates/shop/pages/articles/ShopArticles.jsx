import React from "react";

import List from "../../@core/components/main/Slider/List";
import OrderingList from "../../@core/Helper/OrderingList";
import Gallery from "../../@core/utils/Gallery";
import Pagination from "../../@core/utils/Pagination";

// import dynamic from "next/dynamic";
// const List = dynamic(() => import("../../@core/components/main/Slider/List"));
// const Carousel = dynamic(
//   () => import("../@core/components/main/carousel/carousel"),

//   { ssr: false }
// );

const SortList = [
  {
    id: 1,
    title: "پربازدیدترین",
  },
  {
    id: 2,
    title: "محبوب ترین",
  },
  {
    id: 3,
    title: "جدیدترین",
  },
  {
    id: 4,
    title: "قدیمی ترین ",
  },
];

function ShopArticles({ data, articles }) {
  console.log(articles?.data?.articles);
  return (
    <section className="container">
      <div className="mt-12 ">
        {" "}
        <Gallery data = {articles?.data?.articles}/>
      </div>
      <h1 className="mt-16 mb-8">همه مقاله ها</h1>
      <OrderingList data={SortList} />
      <List data={articles?.data?.articles} type = 'articles' />
      {/* <Pagination /> */}
    </section>
  );
}

export default ShopArticles;
