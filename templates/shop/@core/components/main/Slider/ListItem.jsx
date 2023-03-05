import React from "react";
import useTimer from "../../../../../../@core/hooks/useTimer";
import useCalculateRemainingTime from "../../../../../../@core/hooks/useCalculateRemainingTime";
import classes from "../Carousel/Carousel.module.css";
import TimeHistory from "../../../icons/TimeHistory";
import Link from "next/link";
import Image from "next/image";
import { Gallery } from "iconsax-react";
import { Add, Trash } from "iconsax-react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
function ListItem({
  item,
  type,
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
    <>
      {type === "articles" && (
        <Link href={`/articles/${item.id}`} className=" relative pb-0 w-full ">
          <div className={"cadr w-full h-full relative"}>
            <div className="relative w-full">
              {!item?.files[0] && (
                <div className="bg-skin-background rounded-xl   aspect-[16/9] mb-8 flex items-center justify-center   ">
                  <Gallery size="70" className="top-[30%] " />
                </div>
              )}
              {item?.files[0] && (
                <div className=" rounded-xl w-[100%] mb-8 aspect-[16/9]  flex items-center justify-center   ">
                  <Image
                    quality={50}
                    decoding="async"
                    alt="slider photo"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={item?.files[0]?.details?.location}
                    src={item?.files[0]?.details?.location}
                    height={400}
                    width={400}
                    className="object-cover w-[100%]  md:mx-auto rounded-lg"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col items-start">
              <h2>{item.title}</h2>
              <div className="my-4  text-justify tracking-tight text-sm px-2">
                {
                  <p>
                    {item?.editors
                      .find((editor) => editor?.type === 2)
                      ?.value?.slice(0, 250)}
                    ...
                  </p>
                }
              </div>
            </div>
          </div>
        </Link>
      )}

      {type !== "articles" && (
        <Link href={`/products/${item.id}`} className=" relative pb-0 w-full ">
          <div
            className={
              favorties
                ? "cadr w-full h-full  border-r-2 relative rounded-none border-bordercolor "
                : "cadr w-full h-full relative"
            }
          >
            <div className="relative w-full">
              {item?.product?.files[0] && (
                <img
                  quality={50}
                  decoding="async"
                  alt="slider photo"
                  loading="lazy"
                  src={item?.product?.files?.[0]?.details?.location}
                  className="object-cover rounded-md mb-5 w-full aspect-square "
                />
              )}
              {!item?.product?.files[0] && (
                <div className="bg-skin-background rounded-xl aspect-square  mb-5 w-full flex items-center justify-center   ">
                  <Gallery size="70" className="top-[30%] " />
                </div>
              )}
            </div>
            {/* {item.category && <div>{item.category.name}</div>} */}
            <h2 className="text-right">{item?.product?.translate[0]?.data}</h2>
            <div className={classes.flexBetween}>
              {item?.price?.price && (
                <div className=" bg-skin-secondary text-skin-primary rounded-lg p-1 ml-[.3rem] text-center w-10 h-10">
                  <Add size={32} />
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
      )}
    </>
  );
}

export default ListItem;
