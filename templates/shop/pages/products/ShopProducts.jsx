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
import { useSelector } from "react-redux";
import { Setting5, Sort } from "iconsax-react";
function ShopAllProducts({ products }) {
  const [nowseconds, nowminutes, nowhours, nowdays] =
    useCalculateRemainingTime(0);
  // console.log(nowseconds, nowminutes, nowhours, nowdays);
  const peoductCategories = useSelector(
    (state) => state?.businessSlice.productCategorys
  );
  console.log(products);
  console.log(peoductCategories);
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
      <Categories data={ProductsData} dataa={peoductCategories} />
        <div className="lg:hidden w-full flex items-center justify-between">
          <button className="flex items-center mb-4 border-0">
            <p className="ml-1">
              <Setting5 size={20} />
            </p>{" "}
            <h4>فیلتر‌ها</h4>
          </button>
          <button className="flex items-center mb-4 border-0">
            <p className="ml-1">
              <Sort size={20} />
            </p>{" "}
            <h4>مرتب‌سازی</h4>
          </button>
        </div>
      <div className=" flex justify-between">
        <div className="w-[350px] hidden lg:block ml-4">
          <FilterBar />
        </div>
        <div className="w-[100%]">
          <OrderingList data={SortList} />
          <List data={products} offcerPage={true} />
        </div>
      </div>
      {/* <Pagination /> */}
    </main>
  );
}

export default ShopAllProducts;
