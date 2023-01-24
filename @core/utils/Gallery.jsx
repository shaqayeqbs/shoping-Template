import Image from "next/image";
import React from "react";

export default function Gallery() {
  const data = [
    { id: 1, title: "یک باغبان حرفه‌ای باشید", images: "/images/plant.png" },
    { id: 2, title: "ارتباط گیاهان و یوگا", images: "/images/plant.png" },
    { id: 3, title: "تاثیر باران بر گیاهان", images: "/images/plant.png" },
    { id: 4, title: "آبیاری صحیح گیاهان", images: "/images/plant.png" },
    { id: 5, title: "ارتباط گیاهان و یوگا ", images: "/images/plant.png" },
  ];
  return (
    <div className=" grid grid-cols-2 gap-4 lg:grid-cols-4 ltr mt-4">
      {data.map((item) => (
        <div
          key={item.id}
          className={
            item.id === 1
              ? "relative w-full h-full col-span-2 row-span-2 rounded shadow-sm lg:col-start-3 lg:row-start-1"
              : "relative w-full h-full rounded-xl overflow-hidden "
          }
        >
          <img width={900} height={900} src={item.images} className="w-full" />
          <div className="absolute blurr  text-[white] text-center bottom-0 rounded-ms py-4 w-full">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}
