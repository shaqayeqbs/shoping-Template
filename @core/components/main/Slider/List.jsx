import { digitsEnToFa } from "@persian-tools/persian-tools";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useTimer from "../../../hooks/useTimer";
import TimeHistory from "../../../icons/TimeHistory";
import classes from "../carousel/Carousel.module.css";

function List({ data, offcerPage, articles }) {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();
  return (
    <ul className="grid grid-cols-1 md:grid-cols-4">
      {data?.map((item) => (
        <Link href={`/products/${item.id}`} key={item.id}>
          <div className="cadr my-2">
            <Image
              alt="slider photo"
              unoptimized="true"
              src={item.image}
              width={400}
              height={400}
              className={classes.image}
            />
            <h2 className="text-right">{item.title}</h2>
            {!articles && (
              <div className={classes.flexBetween}>
                <div className="flex justify-center align-middle bg-skin-opacity text-skin-primary rounded-lg p-[.3rem] px-6  w-[.1rem] h-[2rem] ml-[.3rem] text-center">
                  {digitsEnToFa(item.precent)}
                </div>
                <div className="flex">
                  <div>
                    <div className="text-xl !containerfont-extrabold">
                      <strong>{digitsEnToFa(item.price)}</strong>
                    </div>
                    <p>{digitsEnToFa(item.lastPrice)}</p>
                  </div>
                  <div className="mt-[.3rem] text-base mr-2">تومان</div>
                </div>
              </div>
            )}
            {articles && (
              <div className="my-4  text-justify tracking-tight">
                {item.description}
              </div>
            )}
            {offcerPage && (
              <div className="relative m-2 mb-6 flex ltr text-skin-primary text-left ">
                <span className="flex text-skin -primary font-xl">
                  {" "}
                  <TimeHistory />
                </span>
                {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
                  <h3 className="ltr" dir="ltr">
                    {FaHours}: {Faminutes} :
                    {seconds < 10 ? `۰${Faseconds}` : Faseconds}
                  </h3>
                )}
              </div>
            )}
          </div>
        </Link>
      ))}
    </ul>
  );
}

export default List;
