import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

import LandingCarouselSlide from "./SwipperSlides";

function HeaderCarousel({ items }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [swiper, setSwiper] = useState(null);

  const nextSlide = () => {
    swiper.slideNext();
  };
  const prevSlide = () => {
    swiper.slidePrev();
  };

  return (
    <div className="mb-8  h-max relative">
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 "
        onSwiper={setSwiper}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index} className="pb pt-3 ">
            <LandingCarouselSlide itemData={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-11 cursor-pointer w-[25%] right-[25%] md:right-[18%] 2xl:right-[23%]  3xl:right-[33%]">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={0}
          slidesPerView={4}
          freeMode={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          // slideActiveClass="border-2  w-[10rem]"
        >
          {items?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="container rounded-lg w-full !md:w-[23%] !h-12s text-right !ml-[2%]  "
            >
              <div className="rounded-md p-0 ">
                {" "}
                <Image
                  width={200}
                  height={80}
                  unoptimized="true"
                  src={item?.file[0]?.details.location}
                  className="object-cover h-[2.5rem] w-full rounded-lg mt-10"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container relative z-20">
        {" "}
        <button
          className=" absolute bottom-[3.2rem] z-10 md:w-[8%] text-[white] border-2 border-[white] align-middle rounded-md p-1 "
          onClick={nextSlide}
        >
          <ArrowRight2 className="inline-block" size="32" />
        </button>
        <button
          onClick={prevSlide}
          className="absolute md:w-[8%] left-0 bottom-[3.2rem] text-[white] border-[white] border-2 p-1 rounded-md align-middle"
        >
          <ArrowLeft2 className="inline-block" size="32" />
        </button>
      </div>
    </div>
  );
}

export default HeaderCarousel;
