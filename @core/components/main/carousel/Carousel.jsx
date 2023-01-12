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
import { digitsEnToFa } from "@persian-tools/persian-tools";
const Carousel = ({ data, offcerPage }) => {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();

  return (
    <>
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: offcerPage ? 4 : 3,
            slidesPerGroup: offcerPage ? 4 : 3,
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
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="cadr ml-3 !min-h-[430px] max-w-[262px]">
              <Image
                alt="slider photo"
                src={item.image}
                width={400}
                height={400}
                className={classes.image}
              />
              <h2 className="!text-md mb-[14%] text-right">{item.title}</h2>
              <div className={classes.flexBetween}>
                <div className="flex justify-center align-middle bg-skin-opacity text-skin-primary rounded-lg p-[.3rem] px-6  w-[.1rem] h-[2rem] ml-[.3rem] text-center">
                  {digitsEnToFa(item.precent)}
                </div>
                <div className="flex">
                  <div>
                    <div className="text-2xl !containerfont-extrabold">
                      <strong>{digitsEnToFa(item.price)}</strong>
                    </div>
                    <p>{digitsEnToFa(item.lastPrice)}</p>
                  </div>
                  <div className="mt-[.3rem] text-base mr-2">تومان</div>
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
