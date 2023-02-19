import React from "react";
import Categories from "../../@core/components/main/Categories";
import FilterBar from "../../@core/components/main/shop/filter/filterBar";
import { ProductsData } from "../../@core/data/products";
import Pagination from "../../@core/utils/Pagination";
import List from "../../@core/components/main/Slider/List";
import OrderingList from "../../@core/Helper/OrderingList";
// import dynamic from "next/dynamic";
// const List = dynamic(() => import("../../@core/components/main/Slider/List"));
// const OrderingList = dynamic(() => import("../../@core/Helper/OrderingList"));
import useCalculateRemainingTime from "../../../../@core/hooks/useCalculateRemainingTime";
function ShopAllProducts({ products }) {
  const [nowseconds, nowminutes, nowhours, nowdays] =
    useCalculateRemainingTime(0);
  // console.log(nowseconds, nowminutes, nowhours, nowdays);
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
    <main className="container !mt-20">
      <Categories data={ProductsData} />
      <div className=" flex justify-between">
        <div className="w-[30%]">
          <FilterBar />
        </div>
        <div className="w-[100%] mr-10">
          <OrderingList data={SortList} />
          <List data={products} offcerPage={true} />
        </div>
      </div>
      <Pagination />
    </main>
  );
}

export default ShopAllProducts;
