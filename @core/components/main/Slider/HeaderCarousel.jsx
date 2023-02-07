import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/legacy/image";
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
    <div className="  h-max relative ">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        loop={true}
        spaceBetween={0}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 "
        onSwiper={setSwiper}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index} className="pt-3 ">
            <LandingCarouselSlide itemData={item} />
          </SwiperSlide>
        ))}
        <div className="container flex justify-between  !mt-[-6rem] !mb-[6rem] relative z-20">
          {" "}
          <div className="flex">
            <div>
              {" "}
              <button
                onClick={nextSlide}
                className="  z-10 md:w-[6rem] text-[white] border-2  border-[white] h-[3rem] align-middle rounded-md p-1 "
              >
                <ArrowRight2 className="inline-block" size="32" />
              </button>
            </div>
          </div>
          <div>
            {" "}
            <button
              onClick={prevSlide}
              className=" md:w-[6rem]  text-[white] border-[white] border-2 p-1 h-[3rem]  rounded-md align-middle"
            >
              <ArrowLeft2 className="inline-block" size="32" />
            </button>
          </div>
        </div>
      </Swiper>

      <div className="container relative">
        {" "}
        <div className="container  absolute !mt-[-9rem] ! cursor-pointer  right-[6.5rem] !max-w-[35%]   ">
          <Swiper
            onSwiper={setSwiper}
            loop={true}
            spaceBetween={0}
            slidesPerView={4}
            freeMode={true}
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
                className=" relative rounded-lg w-full !md:w-[2rem]  !h-[3rem]  text-right !ml-[1%]  "
              >
                <div className="relative !z-40">
                  {" "}
                  <Image
                    alt="slider"
                    quality={50}
                    width={90}
                    loading="lazy"
                    height={40}
                    src={item?.file[0]?.details.location}
                    className="object-cover inline-block h-[3rem] rounded-lg !z-50"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HeaderCarousel;
