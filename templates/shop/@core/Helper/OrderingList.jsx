import React from "react";
import SortIcon from "../icons/SortIcon";

function OrderingList({ data }) {
  return (
    <div className=" hidden lg:flex mb-4">
      <div className="flex">
        <p>
          <SortIcon />{" "}
        </p>
        <h4 className=" whitespace-nowrap">مرتب سازی:</h4>
      </div>
      {data?.map((item) => (
        <div className="mx-4 text-skin-muted cursor-pointer whitespace-nowrap text-sm" key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default OrderingList;
