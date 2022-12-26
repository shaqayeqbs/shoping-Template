import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import Image from "next/image";

function HeaderCarousel({ items }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiper, setSwiper] = useState(null);

  const nextSlide = () => {
    swiper.slideNext();
  };
  const prevSlide = () => {
    swiper.slidePrev();
  };

  console.log({ items });
  return (
    <div className="mb-8  relative">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        style={{
          "--swiper-button-next ": "red",
          "swiper-button-prev": "red",
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
        {items.map((item) => (
          <SwiperSlide
            style={{ backgroundColor: item.color }}
            className="py-12 pb-28"
          >
            <div className="container flex justify-between  bg-[white] p-2 rounded-lg text-right">
              <div className="translate-y-[12%] p-9">
                <h1 className="font-bold text-4xl  my-8 ">{item.title}</h1>
                <p className="text-lg">{item.description}</p>
                <button
                  className="border-2 rounded-xl p-2 px-8 my-8 "
                  style={{ color: item.color, borderColor: item.color }}
                >
                  مشاهده
                </button>
              </div>
              <Image
                src={item.image}
                width={1000}
                height={500}
                className="object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-11 cursor-pointer w-[27.2%] right-[16rem] ">
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
          slideActiveClass="border-2 border-[red] w-[10rem]"
        >
          {items.map((item) => (
            <SwiperSlide className="container rounded-lg !w-24 !h-12s text-right !ml-5 ">
              <div className="rounded-md p-0">
                {" "}
                <img
                  src={item.image}
                  className="object-cover h-[2.5rem] w-full rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative z-20">
        {" "}
        <div className="absolute bottom-11 right-36">
          <button
            className=" z-10 w-24 text-[white] border-2 align-middle rounded-md p-1 "
            onClick={nextSlide}
          >
            <ArrowRight2 className="inline-block" size="32" />
          </button>
        </div>
        <button
          onClick={prevSlide}
          className="absolute w-24 left-36 bottom-11 text-[white] border-2 p-1 rounded-md align-middle"
        >
          <ArrowLeft2 className="inline-block" size="32" />
        </button>
      </div>
    </div>
  );
}

export default HeaderCarousel;
