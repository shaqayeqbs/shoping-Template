import React, { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";

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
    <div className="py-10 pb-32" style={{ background: bkgColor }}>
      <div className="container flex justify-between  cadr">
        <div className="translate-y-[10%] p-9">
          <h1 className=" text-[32px] leading-[54.5px] font-extrabold  my-8 text-right ">
            {item.title}
          </h1>
          <p className="text-lg">{item.sub_title}</p>
          <button
            className="border-2 rounded-xl p-2 px-8 my-4"
            style={{ color: item.color, borderColor: item.color }}
          >
            مشاهده
          </button>
        </div>
        <div className="w-[746px] h-full">
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
      </div>
    </div>
  );
}

export default LandingCarouselSlide;
