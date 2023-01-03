import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import Image from "next/image";
import classes from "./Carousel.module.css";
import useTimer from "../../../hooks/useTimer";
import TimeHistory from "../../../icons/TimeHistory";

const Carousel = ({ data, offcerPage }) => {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();

  return (
    <>
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        spaceBetween={0}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        // className={classes.container}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={classes.CarouselItem}>
              <Image
                alt="slider photo"
                src={item.src}
                width={400}
                height={400}
                className={classes.image}
              />
              <h2>{item.title}</h2>
              <div className={classes.flexBetween}>
                <div className="flex justify-center align-middle bg-skin-opacity text-skin-primary rounded-lg p-[.8rem] px-8 w-[2.5rem] h-[2.5rem] text-center">
                  {item.precent}
                </div>
                <div className={classes.flex}>
                  <div>
                    <div className="text-[24px]">{item.lastPrice}</div>
                    <p>{item.price}</p>
                  </div>
                  <div className="mt-[.3rem] mr-2">تومان</div>
                </div>
              </div>
              {offcerPage && (
                <div className="relative m-2 mb-6 flex ltr text-skin-primary text-left ">
                  <span className="flex text-skin -primary font-xl">
                    {" "}
                    <TimeHistory />
                  </span>
                  {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
                    <h3 className="ltr" dir="ltr">
                      {FaHours}: {Faminutes} :
                      {seconds < 10 ? `۰${Faseconds}` : Faseconds}
                    </h3>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default memo(Carousel);
