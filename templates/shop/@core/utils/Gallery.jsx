import Image from "next/image";
import React from "react";

export default function Gallery({data}) {
  const datad = [
    { id: 1, title: "یک باغبان حرفه‌ای باشید", images: "/images/plant.png" },
    { id: 2, title: "ارتباط گیاهان و یوگا", images: "/images/plant.png" },
    { id: 3, title: "تاثیر باران بر گیاهان", images: "/images/plant.png" },
    { id: 4, title: "آبیاری صحیح گیاهان", images: "/images/plant.png" },
    { id: 5, title: "ارتباط گیاهان و یوگا ", images: "/images/plant.png" },
  ];

  const dataa = [...data, ...data, ...data, ...data, ...data]
  const dataaa = [...dataa, ...dataa, ...dataa]


  return (
    <div className=" grid grid-cols-2 gap-4 lg:grid-cols-4 ltr w-full mt-4">
      {dataaa?.slice(0, 5).map((item, index) => (
        <div
          key={item.id}
          className={
            index === 0
              ? "relative col-span-2 row-span-2 rounded-xl shadow-sm lg:col-start-3 lg:row-start-1 overflow-hidden"
              : "relative rounded-xl overflow-hidden "
          }
        >
          <div className="relative">
            {" "}
            <Image
              alt={item.title}
              quality={50}
              loading="lazy"
              width={500}
              height={500}
              src={item.files[0].details.location}
              className="w-full aspect-auto"
            />
          </div>
          <div className="absolute blurr  text-[white] text-center bottom-0 rounded-ms sm:py-2 w-full">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}
