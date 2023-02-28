import Link from "next/link";
import React, { memo } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import useTimer from "../../../hooks/useTimer";
import Offer from "../../../icons/Offer";
// const Carousel = dynamic(() => import("../carousel/carousel"));
import Carousel from "../Carousel/Carousel";

function AmazingSection(products) {
  const [hours, minutes, seconds, farsMin, FaHours, Faseconds, refreshTimer] =
    useTimer(0, 2, 0);

  const timerBtn =
    "bg-skin-secondary md:h-[2.5rem] w-[2.5rem]  p-2 px-5 text-skin-primary rounded-md";
  const timerDevider = "text-skin-primary mx-2";

  return (
    <section className="container md:flex px-0 text-center w-full  pb-10 !py-12 pt-20 overflow-x-hidden ">
      <h1 className="block md:hidden mt-10 text-xl text-center mb-8 text-[white]">
        تخفیفات شگفت انگیز
      </h1>

      <div className="hidden md:block bg-black">
        <div className="bg-[white]  ml-6  rounded-2xl w-[200px] lg:w-[262px]  h-[368px]  py-6 text-[22px] ">
          <div className=" px-14 py-10 pt-5">
            <Offer />
          </div>

          <h1 className="text-xl text-center mb-8">تخفیفات شگفت انگیز</h1>
          <div>
            {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
              <h3 className="text-center my-4" dir="rtl">
                <span className={timerBtn}>{FaHours}</span>
                <span className={timerDevider}>:</span>
                <span className={timerBtn}>{farsMin}</span>{" "}
                <span className={timerDevider}>:</span>
                {seconds < 10 ? (
                  <span className={timerBtn}>۰{Faseconds}</span>
                ) : (
                  <span className={timerBtn}>{Faseconds}</span>
                )}
              </h3>
            )}
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

      <div className="w-full   m-0 !md:mr-5">
        {" "}
        <Carousel products={products} />
      </div>
    </section>
  );
}

export default memo(AmazingSection);
