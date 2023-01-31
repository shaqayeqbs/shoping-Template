import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Trash } from "iconsax-react";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import useTimer from "../../../hooks/useTimer";
import TimeHistory from "../../../icons/TimeHistory";
import classes from "../carousel/Carousel.module.css";

function List({
  data = null,
  offcerPage = null,
  articles = null,
  favorties = null,
}) {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();
  console.log({ data }, "lll");
  return (
    <ul className="grid grid-cols-1 md:grid-cols-4">
      {data?.map((item) => (
        <Link
          href={articles ? `/articles/${item.id}` : `/products/${item.id}`}
          key={item.id}
        >
          <div
            className={
              favorties
                ? "cadr my-2 border-r-2 rounded-none border-bordercolor"
                : "cadr my-2 "
            }
          >
            {item.image && (
              <Image
                quality={50}
                decoding="async"
                alt="slider photo"
                loading="lazy"
                src={item.image}
                width={400}
                height={400}
                className={classes.image}
              />
            )}
            {item.category && <div>{item.category.name}</div>}
            <h2 className="text-right">{item.title}</h2>
            {!articles && (
              <div className={classes.flexBetween}>
                <div className="flex justify-center align-middle bg-skin-secondary text-skin-primary rounded-lg p-[.3rem] px-6  w-[.1rem] h-[2rem] ml-[.3rem] text-center">
                  {digitsEnToFa(item.precent)}
                </div>
                <div className="flex">
                  <div>
                    <div className="text-xl !containerfont-extrabold">
                      <strong>{digitsEnToFa(item.price)}</strong>
                    </div>
                    <p className="text-skin-muted line-through">
                      {digitsEnToFa(item.lastPrice)}
                    </p>
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
            {favorties && (
              <div className="flex justify-between text-skin-primary">
                <div className="mt-1">
                  <Trash size="24" variant="Bold" />
                </div>
                <button className="rounded-md p-1 px-5">+ افزودن </button>
              </div>
            )}
          </div>
        </Link>
      ))}
    </ul>
  );
}

export default List;
