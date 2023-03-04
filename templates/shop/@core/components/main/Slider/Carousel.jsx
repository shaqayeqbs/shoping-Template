import React, { memo, useState } from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import OfferCarousel from "./OfferCarousel";
const Carousel = ({ data = null, articles }) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="">
      {" "}
      <Swiper
        breakpoints={{
          600: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },

          700: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },

          1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
        }}
        scrollbar={{ draggable: true, hide: true }}
        navigation={true}
        modules={[Autoplay, Navigation, Scrollbar]}
        className=""
        onSwiper={setSwiper}
      >
        {data?.map((item) => (
          <SwiperSlide
            className="flex w-full  justify-center lg:text-right "
            key={item.id}
          >
            <OfferCarousel key={item.id} item={item} swiper={swiper} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Carousel);
