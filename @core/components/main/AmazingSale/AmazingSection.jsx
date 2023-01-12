import React from "react";
import Link from "next/link";
import useTimer from "../../../hooks/useTimer";
import { AiOutlineLeft } from "react-icons/ai";
import dynamic from "next/dynamic";
import Offer from "../../../icons/Offer";
const Carousel = dynamic(() => import("../carousel/carousel"), { ssr: false });

function AmazingSection() {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();
  const data = [
    {
      id: 1,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285٬000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 2,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285٬000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 3,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285٬000",
      lastPrice: "700٬000٬000",
    },
    {
      id: 4,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      image: "/images/plant.png",
      precent: "   25%",
      price: "285٬000",
      lastPrice: "300٬000٬000",
    },
  ];
  const timerBtn =
    "bg-skin-opacity h-[2.5rem] w-[2.5rem]  p-2 px-5 text-skin-primary rounded-md";
  const timerDevider = "text-skin-primary mx-2";

  return (
    <section className="container flex px-0 text-center w-full  !py-12 !pt-16 overflow-x-hidden ">
      <div className="bg-black">
        <div className="bg-[white] rounded-2xl w-[200px] lg:w-[262px]  h-[368px]  py-6 text-[22px] ">
          <div className="px-14 py-10 pt-5">
            <Offer />
          </div>

          <h1 className="text-xl text-center mb-8">تخفیفات شگفت انگیز</h1>
          <div>
            {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
              <h3 className="text-center my-4" dir="ltr">
                <span className={timerBtn}>{FaHours}</span>
                <span className={timerDevider}>:</span>
                <span className={timerBtn}>{Faminutes}</span>{" "}
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
        <div className=" flex justify-center text-[white] mx-4 text-[28px]">
          <Link href="/products" className="pt-0">
            مشاهده همه
          </Link>
          <span className="mt-6">
            {" "}
            <AiOutlineLeft />
          </span>
        </div>
      </div>

      <div className="w-full mr-3">
        {" "}
        <Carousel data={data} />
      </div>
    </section>
  );
}

export default AmazingSection;
