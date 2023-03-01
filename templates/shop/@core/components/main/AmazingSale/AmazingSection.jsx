import Link from "next/link";
import React, { memo } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import useTimer from "../../../../../../@core/hooks/useTimer";
import Offer from "../../../icons/Offer";
// const Carousel = dynamic(() => import("../carousel/carousel"));
import Carousel from "../Carousel/Carousel";
import useCalculateRemainingTime from "../../../../../../@core/hooks/useCalculateRemainingTime";

function AmazingSection({ products }) {
  let offDate = new Date();

  console.log(offDate, "lllll");
  for (const each in products) {
    if (products[each]?.price?.off) {
      const productEndOff = new Date(products[each]?.price?.off?.end);

      if (offDate.getTime() < productEndOff.getTime()) {
        offDate = productEndOff;
      }
    }
  }
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  let formattedDate = offDate
    .toLocaleString("en-US", options)
    .replaceAll("/", "-")
    .slice(0, 19)
    .replaceAll(",", "");

  console.log(formattedDate, "end");
  const [nowseconds, nowminutes, nowhours, nowdays] =
    useCalculateRemainingTime(formattedDate);

  const [hours, minutes, seconds, farsMin, FaHours, Faseconds, refreshTimer] =
    useTimer(nowseconds, nowminutes, nowhours, nowdays);

  console.log(hours, minutes, seconds, farsMin, FaHours, Faseconds);

  const timerBtn =
    "bg-skin-secondary md:h-[2.5rem] w-[2.5rem]  p-2 px-5 text-skin-primary rounded-md";
  const timerDevider = "text-skin-primary mx-2";

  return (
    <section className="container md:flex px-0 text-center w-full  pb-10 !py-12 pt-20 overflow-x-hidden ">
      <h1 className="block md:hidden mt-10 text-xl text-center mb-8 text-[white]">
        تخفیفات شگفت انگیز
      </h1>

      <div className="hidden md:block  min-w-[200px] w-[35%]   ">
        <div className="bg-[white]  ml-3  rounded-2xl   h-[358px]  py-6 text-[22px] ">
          <div className=" px-14 py-10 pt-5">
            <Offer />
          </div>

          <h1 className="text-xl text-center mb-4">تخفیفات شگفت انگیز</h1>
          <div className=" flex h-max   justify-center  !mb-9 ">
            <div className="relative  m-2 mb-10  flex ltr text-skin-primary text-left h-6">
              {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
                <div className="mb-9">
                  <h3 className="ltr" dir="ltr">
                    {FaHours}: {farsMin} :
                    {seconds < 10 ? `۰${Faseconds}` : Faseconds}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" flex justify-center text-[white] mt-6 mx-4 md:text-[20px]">
          <Link href="/products" className="pt-0">
            مشاهده همه
          </Link>
          <span className="mt-[6px] mx-2 ">
            {" "}
            <AiOutlineLeft />
          </span>
        </div>
      </div>

      <div className="w-full   m-0  ">
        {" "}
        <Carousel products={products} />
      </div>
    </section>
  );
}

export default memo(AmazingSection);
