import React from "react";
import classes from "./AmazingSection.module.css";
import Image from "next/dist/client/image";
import Link from "next/link";
import useTimer from "../../../hooks/useTimer";
import { AiOutlineLeft } from "react-icons/ai";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("../carousel/carousel"), { ssr: false });

function AmazingSection() {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();
  return (
    <section className="container flex px-0 text-center max-w-full  py-16">
      <div className="h-[30rem] bg-black">
        <div className={classes.offer}>
          <Image
            alt="slider photo"
            src="/images/offer.png"
            width={400}
            height={400}
          />
          <h1 className="">تخفیفات شگفت انگیز</h1>
          <div>
            {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
              <h3 className="" dir="ltr">
                {FaHours}: {Faminutes} :
                {seconds < 10 ? `۰${Faseconds}` : Faseconds}
              </h3>
            )}
          </div>
        </div>
        <div className=" flex justify-center text-[#ffff]">
          <Link href="/" className="text-white text-green">
            مشاهده همه
          </Link>
          <AiOutlineLeft />
        </div>
      </div>

      <Carousel />
    </section>
  );
}

export default AmazingSection;
