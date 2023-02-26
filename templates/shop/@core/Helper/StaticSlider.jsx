import Image from "next/image";
import React, { useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function HeaderCarousel({ items }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex  w-full relative gap-0  text-right ltr h-[17rem]  md:h-max ">
      <div className="md:absolute w-full md:w-[80%] !left-0 mx-0  my-0 ">
        <Swiper
          breakpoints={{
            700: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          spaceBetween={20}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          scrollbar={{ draggable: true, hide: true }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay, Scrollbar]}
          className="relative   border-1 border-borderColor   "
          style={{ width: "100%" }}
        >
          {items?.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ backgroundColor: item.color }}
              className="!p-0  top-0 left-0"
            >
              <div className="w-[80%] md:w-full   text-left ">
                <Image
                  quality={50}
                  loading="lazy"
                  alt="list of products"
                  src={item.details?.location}
                  width={360}
                  height={360}
                  className="object-cover rounded  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute left-[-1rem] md:left-[0%] md:right-[2%] top-0">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          direction="vertical"
          height={4}
          className="!w-[60px] flex justify-between   top-0 !h-[260px] md:!h-[360px] "
        >
          {items?.map((item, index) => (
            <SwiperSlide key={index} className="w-[4rem] h-[4rem] ">
              <div className=" relative cursor-pointer !w-[3rem]">
                <Image
                  quality={50}
                  width={360}
                  alt="list of products"
                  height={360}
                  src={item.details.location}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeaderCarousel;
