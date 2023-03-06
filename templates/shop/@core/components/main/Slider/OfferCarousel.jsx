import React from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";
import Image from "next/legacy/image";
import useCalculateRemainingTime from "../../../../../../@core/hooks/useCalculateRemainingTime";
import TimeHistory from "../../../icons/TimeHistory";
import useTimer from "../../../../../../@core/hooks/useTimer";
import { Gallery } from "iconsax-react";
function OfferCarousel({ item, swiper }) {
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
    <Link href={`/products/${item.id}`} className="w-full" key={item.id}>
      <div
        className="cadr cursor-pointer  w-full"
        onMouseLeave={() => {
          console.log("first");
          swiper.autoplay.start();
        }}
        onMouseOver={() => {
          console.log("over");
          swiper.autoplay.stop();
        }}
      >
        <div className="reltive w-full">
          {item?.products?.files && (
            <Image
              quality={50}
              decoding="async"
              alt="slider photo"
              loading="lazy"
              placeholder="blur"
              blurDataURL={item?.files[0]?.details?.location}
              src={item?.files[0]?.details?.location}
              width={500}
              height={500}
              className="object-cover md:mx-auto"
            />
          )}
        </div>
        <div className="reltive">
          {" "}
          {item?.product?.files[0] && (
            <div className="relative w-full aspect-square">
              <Image
                quality={50}
                decoding="async"
                alt="slider photo"
                loading="lazy"
                placeholder="blur"
                blurDataURL={item?.product.files[0]?.details?.location}
                src={item?.product.files[0]?.details?.location}
                layout="fill"
                className="object-cover md:mx-auto"
              />
            </div>
          )}
          {!item?.product?.files[0] && (
            <div className="bg-skin-background aspect-square rounded-xl   w-full flex items-center justify-center   ">
              <Gallery size="70" className="" />
            </div>
          )}
        </div>
        <h2 className="font-bold my-3 text-lg md:text-right">
          {item.title ? item.title : item.product.translate[0].data}
        </h2>
        <p className="text-[#6F6F6F] py-2">
          <div className="flex justify-between">
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
                  <p className="ltr text-skin-muted line-through">
                    {digitsEnToFa(item?.price?.price?.toLocaleString() || 0)}
                  </p>
                )}
              </div>
              <div className="mt-[.3rem] text-base mr-2">تومان</div>
            </div>
          </div>
        </p>

        {item?.price?.price && (
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

        <div className="lg:flex w-full text-center  mb-8 lg:max-w-[15rem] mx-0  p-0 justify-between">
          {item?.new && (
            <div className=" max-w-[3.5rem] text-center  md:mx-auto lg:mx-0  my-4 lg:my-0   text-skin-primary  bg-skin-secondary rounded-[3px] md:p-1 md:px-3 ">
              جدید
            </div>
          )}
          {/* {item?.price && (
          <div className=" flex justify-between w-full gap-1 ">
            <div className="font-bold text-xl   md:mx-auto lg:mx-0">
              {digitsEnToFa(item?.price)}
            </div>
            <div className="text-lg">تومان</div>
          </div>
        )} */}
        </div>
      </div>
    </Link>
  );
}

export default OfferCarousel;
