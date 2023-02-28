import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";
import React, { memo } from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/legacy/image";
const Carousel = ({ data, articles }) => {
  console.log({ data });
  return (
    <div className="">
      {" "}
      <Swiper
        breakpoints={{
          400: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          700: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
        }}
        scrollbar={{ draggable: true, hide: true }}
        navigation={true}
        modules={[Autoplay, Navigation, Scrollbar]}
        className=""
      >
        {data?.map((item) => (
          <SwiperSlide
            className="flex w-full   justify-center lg:text-right "
            key={item.id}
          >
            <Link
              href={articles ? `/articles/${item.id}` : `/products/${item.id}`}
              key={item.id}
            >
              <div className="cadr cursor-pointer w-full">
                <div className="reltive">
                  {" "}
                  {item?.product?.files[0]?.details && (
                    <Image
                      quality={50}
                      decoding="async"
                      alt="slider photo"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={item?.product?.files[0]?.details?.location}
                      src={item?.product?.files[0]?.details?.location}
                      width={500}
                      height={500}
                      className="object-cover md:mx-auto"
                    />
                  )}
                  {!item?.product?.files[0] && (
                    <Image
                      quality={50}
                      decoding="async"
                      alt="slider photo"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="https://via.placeholder.com/300/ccc/fff.png"
                      src="https://via.placeholder.com/300/ccc/fff.png"
                      width={500}
                      height={500}
                      className="object-cover md:mx-auto"
                    />
                  )}
                </div>
                <h2 className="font-bold my-3 text-lg md:text-right">
                  {item.title}
                </h2>
                <p className="text-[#6F6F6F] py-2">{item.description}</p>

                <div className="lg:flex w-full text-center  mb-8 lg:max-w-[15rem] mx-0  p-0 justify-between">
                  {item?.new && (
                    <div className=" max-w-[3.5rem] text-center  md:mx-auto lg:mx-0  my-4 lg:my-0   text-skin-primary  bg-skin-secondary rounded-[3px] md:p-1 md:px-3 ">
                      جدید
                    </div>
                  )}
                  {item?.price && (
                    <div className=" flex justify-between w-full gap-1 ">
                      <div className="font-bold text-xl   md:mx-auto lg:mx-0">
                        {digitsEnToFa(item?.price.price)}
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
