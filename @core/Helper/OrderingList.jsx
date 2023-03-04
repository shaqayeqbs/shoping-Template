import React from "react";
import SortIcon from "../icons/SortIcon";
import Link from "next/link";

function OrderingList({ data, url }) {
  return (
    <div className="md:flex mb-4">
      <div className="flex">
        <p>
          <SortIcon />{" "}
        </p>
        <h3>مرتب سازی:</h3>
      </div>
      {data?.map((item) => (
        <Link
          to={url ? url + item.params : "/"}
          className="mx-4 text-skin-muted cursor-pointer"
          key={item.id}
        >
          {item.title}kk
        </Link>
      ))}
    </div>
  );
}

export default OrderingList;
