import React, { memo } from "react";
import Categories from "../../@core/components/main/Categories";
import FilterBar from "../../@core/components/main/shop/filter/filterBar";
// import List from "../../@core/components/main/Slider/List";
import { ProductsData } from "../../@core/data/products";
// import OrderingList from "../../@core/Helper/OrderingList";
import Pagination from "../../@core/utils/Pagination";
import dynamic from "next/dynamic";
const List = dynamic(() => import("../../@core/components/main/Slider/List"));
const OrderingList = dynamic(() => import("../../@core/Helper/OrderingList"));

function AllProducts() {
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
    <main className="container">
      <Categories data={ProductsData} />
      <div className=" flex justify-between">
        <div className="w-[21%]">
          <FilterBar />
        </div>
        <div className="w-[77%]">
          <OrderingList data={SortList} />
          <List data={ProductsData} offcerPage={true} />
        </div>
      </div>
      <Pagination />
    </main>
  );
}

export default memo(AllProducts);
