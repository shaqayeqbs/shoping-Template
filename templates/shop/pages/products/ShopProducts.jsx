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
import { useDispatch, useSelector } from "react-redux";
import { Setting5, Sort } from "iconsax-react";
import FilterModal from "../../@core/components/main/shop/filter/FilterModal";
import { filterModalAction } from "../../../../store/Slices/filterModalSlice";
function ShopAllProducts({ products }) {
  const [nowseconds, nowminutes, nowhours, nowdays] =
    useCalculateRemainingTime(0);
  // console.log(nowseconds, nowminutes, nowhours, nowdays);
  const productCategories = useSelector(
    (state) => state?.businessSlice.productCategorys
  );
  const brands = useSelector((state) => state.businessSlice.brands);
  const filterModalStatus = useSelector((state) => state.filterModal);
  const dispatch = useDispatch();
  console.log(products, "products");
  console.log(productCategories);
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

  const openFilterModalHandler = () => {
    dispatch(filterModalAction.openFilterModal());
  };
  const openSortingModalHandler = () => {
    dispatch(filterModalAction.openSortingModal());
  };
  return (
    <main className="container !mt-20">
      <Categories data={productCategories} />
      <div className="lg:hidden w-full flex items-center justify-between">
        <button
          className="flex items-center mb-4 border-0"
          onClick={openFilterModalHandler}
        >
          <p className="ml-1">
            <Setting5 size={20} />
          </p>{" "}
          <h4>فیلتر‌ها</h4>
        </button>
        <button
          className="flex items-center mb-4 border-0"
          onClick={openSortingModalHandler}
        >
          <p className="ml-1">
            <Sort size={20} />
          </p>{" "}
          <h4>مرتب‌سازی</h4>
        </button>
      </div>
      <div className=" flex justify-between">
        <div className="w-[350px] hidden lg:block ml-4">
          <FilterBar categories={productCategories} />
        </div>
        <div className="w-[100%]">
          <OrderingList data={SortList} />
          <List data={products} offcerPage={true} type="products" />
        </div>
      </div>
      {/* <Pagination /> */}
      {filterModalStatus.isModalOpen && <FilterModal />}
    </main>
  );
}

export default ShopAllProducts;
