import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import Image from "next/image";

function HeaderCarousel({ items }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-row-reverse  !justify-start gap-0 mb-8 !p-0   h-max relative">
      <div className="mx-4 w-full my-0 ">
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
          className=" !w-[100%] !h-full border-1 border-borderColor  "
        >
          {items.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ backgroundColor: item.color }}
              className="!p-0 !w-[100%] !h-[100%] "
            >
              <div className="container  !w-[100%] h-full   cadr p-0    ">
                <Image
                  src={item.image}
                  width={500}
                  height={600}
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
        className="!w-[20%] !h-[20rem]"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="
            rounded-lg  my-1 !ml-[5%]   "
          >
            <img src={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeaderCarousel;
