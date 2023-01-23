import { FastAverageColor } from "fast-average-color";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function LandingCarouselSlide({ itemData: item }) {
  const [bkgColor, setBkgColor] = useState("red");

  const fac = new FastAverageColor();

  useEffect(() => {
    if (item.file) {
      // const img = new Image();
      // img.crossOrigin = "Anonymous";
      // img.addEventListener("load", imageReceived, false);
      // img.src = item?.file[0]?.details.location;
      // const url = item?.file[0]?.details.location;
      // const corsImageModified = new Image();
      // corsImageModified.crossOrigin = "Anonymous";
      // corsImageModified.src = url;
      // getColor(corsImageModified);
    }
  }, [item]);

  async function getColor(corsImageModified) {
    console.log(corsImageModified);
    // if (url) {
    //   const res = await fac.getColorAsync(url);
    //   setBkgColor(res.rgb);
    // }
  }

  return (
    <Link href={item.link}>
      <div
        className="relative py-10 pb-32 cursor-pointer"
        // style={{ background: bkgColor }}
      >
        <Image
          className="blur-xl   w-full h-[20rem] z-0"
          src={item?.file[0]?.details.location}
          layout="fill"
        />

        <div
          style={{ zIndex: 100 }}
          className="container md:flex relative justify-between block md:flex-row-reverse z-50 cadr"
        >
          <div className="relative md:w-[746px] ">
            {" "}
            <Image
              src={
                item?.file[0]?.details.location
                  ? item?.file[0]?.details.location
                  : "/"
              }
              alt={item?.file[0]?.details.location}
              layout="fill"
              className="object-cover block rounded-xl  h-[419px] z-30"
            />
          </div>
          <div className="translate-y-[10%] w-[10rem] p-4 pt-0 md:p-9  text-right">
            <h1 className=" text-[32px] leading-[54.5px] font-extrabold  my-8 text-right ">
              {item.title}
            </h1>
            <p className="text-lg">{item.sub_title}</p>
            <button
              className="border-2  rounded-lg p-2 px-8 my-8"
              style={{ color: item.color, borderColor: item.color }}
            >
              مشاهده
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LandingCarouselSlide;
