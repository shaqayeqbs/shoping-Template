import Image from "next/image";
import React, { useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function HeaderCarousel({ items }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-row-reverse !justify-between gap-0    h-[17rem]  md:h-max relative">
      <div className="mx-0 w-full my-0 ">
        <Swiper
          breakpoints={{
            700: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          loop={true}
          spaceBetween={0}
          thumbs={{ swiper: thumbsSwiper }}
          loopFillGroupWithBlank={true}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="  border-1 border-borderColor  "
          // slideActiveClass="!w-[10rem]"
          style={{ width: "100%" }}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ backgroundColor: item.color }}
              className="!p-0"
            >
              <div className="w-full">
                <img
                  loading="lazy"
                  src={item.image}
                  width={360}
                  height={360}
                  className="object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        loopFillGroupWithBlank={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        direction="vertical"
        height={2}
        className="!w-[60px] !h-[360px]"
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="
            rounded-lg  "
          >
            <img width={360} loading="lazy" height={360} src={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeaderCarousel;
