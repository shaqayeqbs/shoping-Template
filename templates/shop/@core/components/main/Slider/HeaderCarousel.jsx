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
        disableOnInteraction={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, Scrollbar]}
        className="mySwiper2 "
        onSwiper={setSwiper}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index} className="md:pt-3 w-full">
            <LandingCarouselSlide swiper={swiper} itemData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" container relative  ">
        <div className=" absolute bottom-[-13px] w-full flex justify-between   !mb-[6rem]  z-20  ">
          {" "}
          <div className="flex">
            <div>
              {" "}
              <button
                onClick={nextSlide}
                className="right-5 mr-8 md:mr-0  z-10 md:w-[6rem] text-[white] border-2  border-[white] h-[3rem] align-middle rounded-md p-1 "
              >
                <ArrowRight2 className="inline-block" size="32" />
              </button>
            </div>
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
          >
            {items?.map((item, index) => (
              <SwiperSlide
                key={index}
                className=" relative rounded-lg    !md:h-[4rem]  md:mx-6   "
              >
                {/* <div className="md:relative  bg-[red] h-[3rem] rounded-md m-0 !z-40"> */}
                <img
                  alt="slider"
                  quality={50}
                  width={90}
                  loading="lazy"
                  height={48}
                  src={item?.file[0]?.details.location}
                  className="object-cover inline-block w-[4rem] md:w-[7rem] h-[3rem] md:h-[3rem] rounded-lg !z-50"
                />
                {/* </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            {" "}
            <button
              onClick={prevSlide}
              className=" md:w-[6rem] ml-8 md:ml-0  text-[white] border-[white] border-2 p-1 h-[3rem]  rounded-md align-middle"
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
