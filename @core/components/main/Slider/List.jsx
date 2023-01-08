import React from "react";
import TimeHistory from "../../../icons/TimeHistory";
import useTimer from "../../../hooks/useTimer";
import classes from "../carousel/Carousel.module.css";
import Image from "next/image";
import Link from "next/link";

function List({ data, offcerPage, articles }) {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();
  return (
    <ul className="grid grid-cols-1 md:grid-cols-4">
      {data?.map((item) => (
        <Link href={`/products/${item.id}`} key={item.id}>
          <div className={classes.CarouselItem}>
            <Image
              alt="slider photo"
              src={item.image}
              width={400}
              height={400}
              className={classes.image}
            />
            <h2>{item.title}</h2>
            {!articles && (
              <div className={classes.flexBetween}>
                <div className="flex justify-center align-middle bg-skin-opacity text-skin-primary rounded-lg p-[.8rem] px-8 w-[2.5rem] h-[2.5rem] text-center">
                  {item.precent}
                </div>
                <div className={classes.flex}>
                  <div>
                    <div className="text-[130%]">{item.lastPrice}</div>
                    <p>{item.price}</p>
                  </div>
                  <div className="mt-[.3rem] mr-2">تومان</div>
                </div>
              </div>
            )}
            {articles && <div className="my-4">{item.description}</div>}
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
