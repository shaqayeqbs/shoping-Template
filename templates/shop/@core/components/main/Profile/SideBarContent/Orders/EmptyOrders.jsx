import Link from "next/link";
import React from "react";
import NoOrders from "../../../../../icons/profile/NoOrders";

function EmptyOrders() {
  return (
    <div className="text-center content-center p-16 ">
      <div className=" mx-auto w-min ">
        <NoOrders />
      </div>
      <h2 className="my-6">هنوز هیچ سفارشی ندادید!</h2>
      <Link href="offer">
        <a className="text-skin-primary text-[10px] underline">
          {" "}
          رفتن به صفحه شگفت انگیزها
        </a>
      </Link>
    </div>
  );
}

export default EmptyOrders;
