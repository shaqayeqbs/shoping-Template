import { digitsEnToFa } from "@persian-tools/persian-tools";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
          <SwiperSlide
            className="flex w-full  justify-center lg:text-right "
            key={item.id}
          >
            <Link href={`/products/${item.id}`} key={item.id}>
              <div className="cadr cursor-pointer">
                <div>
                  {" "}
                  <Image
                    alt="slider photo"
                    src={item.image}
                    width={600}
                    height={600}
                    className="object-cover mx-auto"
                  />
                </div>
                <h2 className="font-bold my-3 text-lg text-right">
                  {item.title}
                </h2>
                <p className="text-[#6F6F6F] py-2">{item.description}</p>

                <div className="lg:flex w-full text-center  mb-8 lg:max-w-[15rem] mx-0  p-0 justify-between">
                  {item.new && (
                    <div className=" max-w-[3.5rem] text-center  mx-auto lg:mx-0  my-4 lg:my-0   text-skin-primary  bg-skin-secondary rounded-[3px] p-1 px-3 ">
                      جدید
                    </div>
                  )}
                  {item.price && (
                    <div className=" flex gap-1 ">
                      <div className="font-bold text-xl  mx-auto lg:mx-0">
                        {digitsEnToFa(item.price)}
                      </div>
                      <div className="text-lg">تومان</div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Carousel);
