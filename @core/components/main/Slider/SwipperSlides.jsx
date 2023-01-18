import { FastAverageColor } from "fast-average-color";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function LandingCarouselSlide({ itemData: item }) {
  const [bkgColor, setBkgColor] = useState();

  const fac = new FastAverageColor();

  useEffect(() => {
    if (item.file) {
      getColor(item?.file[0]?.details.location);
    }
  }, [item]);

  async function getColor(url) {
    if (url) {
      const res = await fac.getColorAsync(url);
      setBkgColor(res.rgb);
    }
  }

  return (
    <Link href={item.link}>
      <div
        className="py-10 pb-32 cursor-pointer"
        style={{ background: bkgColor }}
      >
        <div className="container md:flex justify-between md:flex-row-reverse  cadr">
          <div className="md:w-[746px] md:h-full">
            {" "}
            <img
              src={
                item?.file[0]?.details.location
                  ? item?.file[0]?.details.location
                  : "/"
              }
              alt={item?.file[0]?.details.location}
              width={1000}
              height={500}
              className="object-cover rounded-xl h-[419px]"
            />
          </div>
          <div className="translate-y-[10%] p-4 pt-0 md:p-9  text-right">
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
