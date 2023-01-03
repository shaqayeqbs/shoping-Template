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
      src: "/images/plant.png",
      precent: "   25%",
      price: "285٬000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 2,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      src: "/images/plant.png",
      precent: "   25%",
      price: "285٬000",
      lastPrice: "400٬000٬000",
    },
    {
      id: 3,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      src: "/images/plant.png",
      precent: "   25%",
      price: "285٬000",
      lastPrice: "700٬000٬000",
    },
    {
      id: 4,
      title: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...",
      src: "/images/plant.png",
      precent: "   25%",
      lastPrice: "285٬000",
      price: "300٬000٬000",
    },
  ];
  return (
    <section className="container flex px-0 text-center w-full  !py-9 overflow-x-hidden ">
      <div className="h-[30rem] bg-black">
        <div className="bg-[white] rounded-2xl w-[100%] mx-0 p-[4%] h-max  py-6 ">
          <div className="p-12">
            <Offer />
          </div>

          <h1 className="text-xl">تخفیفات شگفت انگیز</h1>
          <div>
            {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
              <h3 className="" dir="ltr">
                {FaHours}: {Faminutes} :
                {seconds < 10 ? `۰${Faseconds}` : Faseconds}
              </h3>
            )}
          </div>
        </div>
        <div className=" flex justify-center text-[white] m-4 pt-2">
          <Link href="/products" className="py-4">
            مشاهده همه
          </Link>
          <AiOutlineLeft />
        </div>
      </div>

      <div className=" w-[135%]">
        {" "}
        <Carousel data={data} />
      </div>
    </section>
  );
}

export default AmazingSection;
