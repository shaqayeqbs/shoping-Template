import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs, Scrollbar } from "swiper";
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
    <div className="  md:h-max md:relative  overflow-hidden ">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={{ draggable: true, hide: true }}
        spaceBetween={20}
        disableoninteraction="true"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        autoplay={{
          delay: 2000,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, Scrollbar]}
        className="mySwiper2 "
        onSwiper={setSwiper}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index} className=" w-full ">
            <LandingCarouselSlide swiper={swiper} itemData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" container relative">
        <div className=" absolute  bottom-[-13px] text-right float-right  w-full flex justify-between   !mb-[6rem]  z-20  ">
          {" "}
          <div className="flex">
            <div>
              {" "}
              <button
                onClick={nextSlide}
                className="right-5   md:mr-0  z-10 md:w-[6rem] text-[white] border-2  border-[white] h-[3rem] align-middle rounded-md p-1 "
              >
                <ArrowRight2 className="inline-block" size="32" />
              </button>
            </div>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={0}
              slidesPerView={4}
              freeMode={true}
              autoplay={{
                delay: 2500,
              }}
              scrollbar={{ draggable: true, hide: true }}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Scrollbar, Thumbs]}
              // slideActiveClass="border-2  w-[10rem]"
              className="  min-w-[15rem]"
            >
              {items?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className=" relative rounded-lg  lg:h-[3rem]  aspect-[16/9]   md:mx-6   "
                >
                  <div className="relative   h-[3rem] w-full   rounded-md m-0 !z-40">
                    <Image
                      alt="slider"
                      quality={50}
                      loading="lazy"
                      layout="fill"
                      onClick={setSwiper}
                      src={item?.image}
                      className="object-cover w-full cursor-pointer  h-[3rem] rounded-lg !z-50"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="  ">
            {" "}
            <button
              onClick={prevSlide}
              className=" md:w-[6rem] absolute md:block left-0 md:ml-0  text-[white] border-[white] border-2 p-1 h-[3rem]  rounded-md align-middle"
            >
              <ArrowLeft2 className="inline-block" size="32" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCarousel;
