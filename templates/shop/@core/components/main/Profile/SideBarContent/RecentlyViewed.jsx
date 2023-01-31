import React from "react";
import { ProductsData } from "../../../../data/products";
import OrderingList from "../../../../Helper/OrderingList";
import Card from "../../../../UI/Card";
import List from "../../Slider/List";

function RecentlyViewed() {
  const SortList = [
    {
      id: 1,
      title: "جدیدترین",
    },
    {
      id: 2,
      title: "قدیمی ترین",
    },
  ];
  return (
    <Card>
      <OrderingList data={SortList} />
      <List data={ProductsData} offcerPage={true} />
    </Card>
  );
}

export default RecentlyViewed;
