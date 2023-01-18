import React from "react";
import SortIcon from "../icons/SortIcon";

function OrderingList({ data }) {
  return (
    <div className="md:flex mb-4">
      <div className="flex">
        <p>
          <SortIcon />{" "}
        </p>
        <h3>مرتب سازی:</h3>
      </div>
      {data?.map((item) => (
        <div className="mx-4 text-skin-muted cursor-pointer" key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default OrderingList;
