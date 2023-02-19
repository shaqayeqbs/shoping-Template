import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";
import React, { memo } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/legacy/image";
const Carousel = ({ data = null }) => {
  return (
    <div>
      {" "}
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        spaceBetween={0}
        loop={true}
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
            className="flex w-full mx-2  justify-center lg:text-right "
            key={item.id}
          >
            <Link href={`/products/${item.id}`} key={item.id} className="!py-0">
              <div className="cadr mx-4 cursor-pointer w-full ">
                <div className="reltive py-0">
                  {" "}
                  <Image
                    quality={50}
                    decoding="async"
                    alt="slider photo"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={item?.image}
                    src={item.image}
                    width={400}
                    height={400}
                    className="object-cover mx-auto"
                  />
                </div>
                <h2 className="font-bold my-3 text-lg text-right">
                  {item.title}
                </h2>
                <p className="text-[#6F6F6F] py-2">{item.description}</p>

                <div className="lg:flex w-full text-center  mb-8 lg:max-w-[15rem] mx-0  p-0 justify-between">
                  {item?.new && (
                    <div className=" max-w-[3.5rem] text-center  mx-auto lg:mx-0  my-4 lg:my-0   text-skin-primary  bg-skin-secondary rounded-[3px] p-1 px-3 ">
                      جدید
                    </div>
                  )}
                  {item?.price && (
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
