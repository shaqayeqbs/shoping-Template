// import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";
import React, { memo } from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/legacy/image";
const Carousel = ({ products = null }) => {
  console.log(products, "swieppere");
  return (
    <div>
      {" "}
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },

          800: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        spaceBetween={40}
        navigation={true}
        modules={[Autoplay, Navigation, Scrollbar]}
        scrollbar={{ draggable: true, hide: true }}
      >
        {products?.products?.map((item) => (
          <SwiperSlide
            className="flex  md:w-full md:mx-2 p-0  justify-center lg:text-right "
            key={item.id}
          >
            <Link href={`/products/${item.id}`} key={item.id} className="!py-0">
              <div className="cadr md:mx-4 cursor-pointer w-full ">
                <div className="reltive py-0">
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
                <h2 className="font-bold mx-2 my-3 text-lg text-right">
                  {item?.product.translate[0]?.data}
                </h2>
                <p className="text-[#6F6F6F] py-2">
                  {item?.product.translate[0]?.type?.name}
                </p>

                <div className="lg:flex w-full text-center  mb-8 lg:max-w-[15rem] mx-0  p-0 justify-between">
                  {item?.new && (
                    <div className=" max-w-[3.5rem] text-center  mx-auto lg:mx-0  my-4 lg:my-0   text-skin-primary  bg-skin-secondary rounded-[3px] p-1 px-3 ">
                      جدید
                    </div>
                  )}
                  {/* {item?.price && (
                    <div className=" flex justify-between w-full mx-2 gap-1 ">
                      <div className="font-bold text-xl   md:mx-auto lg:mx-0">
                        {digitsEnToFa(item.price)}
                      </div>
                      <div className="text-lg mx-2">تومان</div>
                    </div>
                  )} */}
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
