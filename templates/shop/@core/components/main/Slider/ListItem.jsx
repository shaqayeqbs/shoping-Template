import React from "react";
import useTimer from "../../../../../../@core/hooks/useTimer";
import useCalculateRemainingTime from "../../../../../../@core/hooks/useCalculateRemainingTime";
import classes from "../Carousel/Carousel.module.css";
import TimeHistory from "../../../icons/TimeHistory";
import Link from "next/link";
import Image from "next/image";
import { Trash } from "iconsax-react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
function ListItem({
  item,
  offcerPage = null,
  articles = null,
  favorties = null,
}) {
  const [nowseconds, nowminutes, nowhours, nowdays] = useCalculateRemainingTime(
    item.price?.off?.end
  );
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer(
    nowseconds,
    nowminutes,
    nowhours,
    nowdays
  );

  return (
    <Link
      href={articles ? `/articles/${item.id}` : `/products/${item.id}`}
      className=" mx-2 w-1/2 relative"
    >
      <div
        className={
          favorties
            ? "cadr my-2 w-full  border-r-2 relative rounded-none border-bordercolor "
            : "cadr my-2  w-full mx-1 relative"
        }
      >
        {item.business?.files[0] && (
          <Image
            quality={50}
            decoding="async"
            alt="slider photo"
            loading="lazy"
            src={item.business?.files[0]?.details?.location}
            width={200}
            height={200}
            className="h-[10rem] rounded-lg w-full mx-auto"
          />
        )}
        <div className="relative w-full h-[2rem]">
          {" "}
          {item.files && (
            <img
              quality={50}
              decoding="async"
              alt="slider photo"
              loading="lazy"
              src={
                item?.files.length > 0
                  ? item?.files[0]?.details?.location
                  : "https://via.placeholder.com/300/ccc/fff.png"
              }
              className="object-cover rounded-md mb-5"
              style={{ width: "15rem", height: "15rem" }}
            />
          )}
        </div>
        {item.category && <div>{item.category.name}</div>}
        <h2 className="text-right">{item?.product?.translate[0]?.data}</h2>
        {!articles && (
          <div className={classes.flexBetween}>
            {item?.price?.price && (
              <div className=" bg-skin-secondary text-skin-primary rounded-lg pt-3 px-2  w-max ml-[.3rem] text-center">
                {digitsEnToFa(item?.price?.price?.toLocaleString())}
              </div>
            )}
            <div className="flex">
              <div>
                <div className="text-xl !containerfont-extrabold">
                  {item?.price?.price && (
                    <strong>
                      {digitsEnToFa(item?.price?.price?.toLocaleString())}
                    </strong>
                  )}
                </div>

                {item.price?.price && (
                  <p className="text-skin-muted line-through">
                    {digitsEnToFa(item?.price?.price?.toLocaleString() || 0)}
                  </p>
                )}
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
          <div className="relative m-2 mb-6 flex ltr text-skin-primary text-left h-6">
            {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
              <div className="flex">
                <h3 className="ltr" dir="ltr">
                  {FaHours}: {Faminutes} :
                  {seconds < 10 ? `۰${Faseconds}` : Faseconds}
                </h3>
                <span className="flex text-skin -primary font-xl">
                  {" "}
                  <TimeHistory />
                </span>
              </div>
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
  );
}

export default ListItem;
