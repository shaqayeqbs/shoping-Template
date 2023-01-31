import dynamic from "next/dynamic";
import { memo } from "react";
// import List from "../@core/components/main/Slider/List";
import OrderingList from "../@core/Helper/OrderingList";
// import Pagination from "../@core/utils/Pagination";
const Carousel = dynamic(
  () => import("../@core/components/main/carousel/carousel"),
  { ssr: false }
);
const Pagination = dynamic(() => import("../@core/utils/Pagination"));
const List = dynamic(() => import("../@core/components/main/Slider/List"));
function ShopOffer() {
  const data = [
    {
      id: 1,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 2,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 3,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "700٬000٬000",
    },
    {
      id: 4,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      lastPrice: "285000",
      price: "300٬000٬000",
    },
    {
      id: 5,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 6,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 7,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "700٬000٬000",
    },
    {
      id: 8,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      lastPrice: "285000",
      price: "300٬000٬000",
    },
    {
      id: 9,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 10,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 11,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "700٬000٬000",
    },
    {
      id: 12,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      lastPrice: "285000",
      price: "300٬000٬000",
    },
    {
      id: 13,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 14,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 15,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "700٬000٬000",
    },
    {
      id: 16,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      lastPrice: "285000",
      price: "300٬000٬000",
    },
    {
      id: 17,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 18,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 19,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "700٬000٬000",
    },
    {
      id: 20,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      lastPrice: "285000",
      price: "300٬000٬000",
    },

    {
      id: 21,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 22,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 23,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285000",
      lastPrice: "700٬000٬000",
    },
    {
      id: 24,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      lastPrice: "285000",
      price: "300٬000٬000",
    },
  ];
  const SortList = [
    {
      id: 1,
      title: "بیشترین تخفیف",
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
      title: "پرفروش ترین",
    },
  ];
  return (
    <>
      <section className="bg-skin-fill py-16 mt-4">
        <div className="container">
          <h1 className="text-center text-[white] mb-10  text-5xl">
            تخفیفات شگفت انگیز
          </h1>

          <Carousel offcerPage={true} data={data} />
        </div>
      </section>
      <section className="container">
        <h1 className="my-12 mb-8">همه شگفت انگیزها</h1>
        <OrderingList data={SortList} />
        <List data={data} offcerPage={true} />
        <Pagination />
      </section>
    </>
  );
}

export default memo(ShopOffer);
