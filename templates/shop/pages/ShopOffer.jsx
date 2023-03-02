// import dynamic from "next/dynamic";
import { memo } from "react";
import List from "../@core/components/main/Slider/List";
import OrderingList from "../@core/Helper/OrderingList";
// import Pagination from "../@core/utils/Pagination";
import Carousel from "../@core/components/main/Slider/Carousel";
import Pagination from "../@core/utils/Pagination";
// import List from "../@core/components/main/Slider/List";
// const Carousel = dynamic(
//   () => import("../@core/components/main/carousel/carousel"),
//   { ssr: false }
// );
// const Pagination = dynamic(() => import("../@core/utils/Pagination"));
// const List = dynamic(() => import("../@core/components/main/Slider/List"));
function ShopOffer({ products }) {
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
      <section className="bg-skin-fill py-16 mt-">
        <div className="container">
          <h1 className="text-center text-[white] p-10 w-full text-[32px]  md:text-5xl">
            تخفیفات شگفت انگیز
          </h1>

          <Carousel offcerPage={true} data={products} />
        </div>
      </section>
      <section className="container">
        <h1 className="my-12 mb-8">همه شگفت انگیزها</h1>
        <OrderingList data={SortList} />
        <List data={products} offcerPage={true} />
        {/* <Pagination /> */}
      </section>
    </>
  );
}

export default memo(ShopOffer);
