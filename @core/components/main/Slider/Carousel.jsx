import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import Image from "next/image";

const Carousel = ({ data }) => {
  return (
    <div>
      {" "}
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
        className=""
      >
        {data?.map((item) => (
          <SwiperSlide className="flex justify-center text-right">
            <div className="bg-[white] rounded-[15px] py-2 mx-2 w-full ">
              <Image
                alt="slider photo"
                src={item.image}
                width={400}
                height={400}
                className="object-cover"
              />
              <h2 className="font-bold m-3 text-lg">{item.title}</h2>
              <p className="text-[#6F6F6F] mx-5 tracking-wide">
                {item.description}
              </p>

              <div className="flex justify-between mt-3 mb-8">
                {item.new && (
                  <div className="text-green mx-6 bg-[#E9F3EC] rounded-[3px] p-1 px-3 text-center">
                    جدید
                  </div>
                )}
                {item.price && (
                  <div className="flex gap-2 mx-3">
                    <div className="font-bold text-xl">{item.price}</div>
                    <div className="text-lg">تومان</div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Carousel);
