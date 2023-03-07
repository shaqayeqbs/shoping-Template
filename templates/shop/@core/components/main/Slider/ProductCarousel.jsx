import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";
import React, { memo } from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/legacy/image";
import ListItem from "./ListItem";
const ProductCarousel = ({ data = [] }) => {
  console.log(data);
  return (
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
      spaceBetween={20}
      autoplay={{
        delay: 2500,
      }}
      scrollbar={{ draggable: true, hide: true }}
      navigation={true}
      modules={[Autoplay, Navigation, Scrollbar]}
      className=""
    >
      {data?.map((item) => (
        <SwiperSlide
          className="flex  w-full justify-center lg:text-right "
          key={item.id}
        >
          <ListItem item={item} type="products" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(ProductCarousel);
