import React from "react";
import { GetArticles, getBussinessGallery } from "../../@core/api/articlesApi";
import List from "../../@core/components/main/Slider/List";
import OrderingList from "../../@core/Helper/OrderingList";
import Gallery from "../../@core/utils/Gallery";
import Pagination from "../../@core/utils/Pagination";
import mainData from "../../@core/utils/serverProps";
import nookies from "nookies";
import useSetBussinessData from "../../@core/hooks/useSetBussinessData";

// import dynamic from "next/dynamic";
// const List = dynamic(() => import("../../@core/components/main/Slider/List"));
// const Carousel = dynamic(
//   () => import("../@core/components/main/carousel/carousel"),

//   { ssr: false }
// );
// const Dummyarticles = [
//   {
//     id: "1",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "3",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "4",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "2",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "13",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "14",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "1500",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "15",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "16",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "17",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "18",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "19",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "20",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "21",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "22",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "23",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "24",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "25",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "26",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "27",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "28",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "29",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "30",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
//   {
//     id: "31",
//     image: "/images/article.png",
//     title: "نحوه نگهداری سانسوریا",
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
//   },
// ];
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

function Articles({ gallery, data, articles }) {
  useSetBussinessData(data);
  // console.log(data);
  console.log({ gallery, data, articles });
  return (
    <section className="container">
      <div className="mt-12 ">
        {" "}
        <Gallery />
      </div>
      <h1 className="mt-16 mb-8">همه مقاله ها</h1>
      <OrderingList data={SortList} />
      <List data={articles?.data.articles} articles={true} />
      <Pagination />
    </section>
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
