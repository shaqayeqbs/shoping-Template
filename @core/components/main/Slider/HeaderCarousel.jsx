import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import Image from "next/image";
import { FastAverageColor } from "fast-average-color";

function HeaderCarousel({ items }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [color, setColor] = useState("#ffffff");
  const [swiper, setSwiper] = useState(null);
  const fac = new FastAverageColor();

  // useEffect(() => {
  //   const getColor = async () => {
  //     const res = await fac.getColorAsync(
  //       "http://core.behzi.net/storage/image/businessBanner/cover/1673343630.jpg"
  //     );
  //     return res;
  //   };

  //   const temp = getColor();
  //   console.log(temp);
  //   setColor(temp);
  //   return () => {
  //     console.log(
  //       "Use this return as a 'clean up tool' (this runs before the actual code)"
  //     );
  //   };
  // }, []);
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
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ backgroundColor: color }}
            className="pb-28 "
          >
            <div className="container flex justify-between  cadr   ">
              <div className="translate-y-[5%] p-9">
                <h1 className=" text-[30px] leading-[54.5px] font-extrabold  my-8 ">
                  {item.title}
                </h1>
                <p className="text-lg">{item.sub_title}</p>
                <button
                  className="border-2 rounded-xl p-2 px-8 my-8 "
                  style={{ color: item.color, borderColor: item.color }}
                >
                  مشاهده
                </button>
              </div>
              <div className="w-[800px]">
                {" "}
                <img
                  // loader={() => {
                  //   return item?.file[0]?.details.location;
                  // }}

                  src={
                    item?.file[0]?.details.location
                      ? item?.file[0]?.details.location
                      : "/"
                  }
                  alt={item?.file[0]?.details.location}
                  width={1000}
                  height={500}
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-11 cursor-pointer w-[25%] right-[18%] 2xl:right-[23%]  3xl:right-[33%]">
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
            <SwiperSlide
              key={item.id}
              className="container rounded-lg !w-[23%] !h-12s text-right !ml-[2%]  "
            >
              <div className="rounded-md p-0">
                {" "}
                <img
                  src={item?.file[0]?.details.location}
                  className="object-cover h-[2.5rem] w-full rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container relative z-20">
        {" "}
        <button
          className=" absolute bottom-11 z-10 w-[8%] text-[white] border-2 border-[white] align-middle rounded-md p-1 "
          onClick={nextSlide}
        >
          <ArrowRight2 className="inline-block" size="32" />
        </button>
        <button
          onClick={prevSlide}
          className="absolute w-[8%] left-0 bottom-11 text-[white] border-[white] border-2 p-1 rounded-md align-middle"
        >
          <ArrowLeft2 className="inline-block" size="32" />
        </button>
      </div>
    </div>
  );
}

export default HeaderCarousel;
