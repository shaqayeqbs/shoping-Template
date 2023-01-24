import Link from "next/link";
import React from "react";

function LandingCarouselSlide({ itemData: item }) {
  return (
    <Link href={item.link}>
      <div className="relative py-10  pb-32 cursor-pointer">
        <img
          loading="lazy"
          className="absolute w-full top-0 blur-xl z-0"
          src={item?.file[0]?.details.location}
          layout="fill"
        />

        <div
          style={{ zIndex: 100 }}
          className="container  md:flex relative justify-between block md:flex-row-reverse z-50 cadr"
        >
          <div className="relative !w-[746px]  !h-[419px]">
            {" "}
            <img
              loading="lazy"
              src={
                item?.file[0]?.details.location
                  ? item?.file[0]?.details.location
                  : "/"
              }
              alt={item?.file[0]?.details.location}
              layout="fill"
              className="object-cover block rounded-xl  !h-[419px] z-30"
            />
          </div>
          <div className="translate-y-[10%] w-[30%] p-4 pt-0 md:p-9  text-right">
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
