import React from "react";
import classes from "./AmazingSection.module.css";
import dynamic from "next/dynamic";
import Image from "next/dist/client/image";
import Link from "next/link";
import useTimer from "../../hooks/useTimer";
import { AiOutlineLeft } from "react-icons/ai";

const Carousel = dynamic(() => import("./carousel/carousel"), { ssr: false });

function AmazingSection() {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();
  return (
    <section className={classes.container}>
      <div>
        <div className={classes.offer}>
          <Image
            alt="slider photo"
            src="/images/offer.png"
            width={400}
            height={400}
          />
          <h1>تخفیفات شگفت انگیز</h1>
          <div>
            {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
              <h3 className="text-[red]" dir="ltr">
                {FaHours}: {Faminutes} :
                {seconds < 10 ? `۰${Faseconds}` : Faseconds}
              </h3>
            )}
          </div>
        </div>
        <div>
          <AiOutlineLeft />
          <Link href="/">مشاهده همه</Link>
        </div>
      </div>
      <div>
        <Carousel />

        <div></div>
      </div>
    </section>
  );
}

export default AmazingSection;
