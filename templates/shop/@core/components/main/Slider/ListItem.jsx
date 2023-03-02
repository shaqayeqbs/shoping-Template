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
      className=" mx-2 w-[100%] relative ml-2 pb-0"
    >
      <div
        className={
          favorties
            ? "cadr w-full h-full  border-r-2 relative rounded-none border-bordercolor "
            : "cadr w-full h-full relative"
        }
      >
        <div className="relative w-full">
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
            />
          )}
        </div>
        {/* {item.category && <div>{item.category.name}</div>} */}
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
          <div className="flex flex-col items-start"><h2>{item.title}</h2>
          <div className="my-4  text-justify tracking-tight text-sm px-2">
            {<p>{item.editors.find(editor => editor.type === 2).value.slice(0, 250)}...</p>}
          </div></div>
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
