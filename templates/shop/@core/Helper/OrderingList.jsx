import React from "react";
import SortIcon from "../icons/SortIcon";
import Link from "next/link";

function OrderingList({ data, url }) {
  return (
    <div className=" hidden lg:flex mb-4">
      <div className="flex">
        <p>
          <SortIcon />{" "}
        </p>
        <h4 className=" whitespace-nowrap">مرتب سازی:</h4>
      </div>
      {data?.map((item) => (
        <Link
          href={url ? url + "/" + item.params : "/"}
          className="mx-4 text-skin-muted cursor-pointer"
          key={item.id}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default OrderingList;
