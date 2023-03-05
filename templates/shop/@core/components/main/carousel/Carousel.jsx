// import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";
import React, { memo, useState } from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/legacy/image";
import { Gallery } from "iconsax-react";
const Carousel = (products) => {
  const [swiper, setSwiper] = useState(null);
  console.log(products, "swieppere");
  return (
    <div className="">
      {" "}
      <Swiper
        breakpoints={{
          600: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },

          700: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },

          1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        spaceBetween={10}
        navigation={true}
        disableOnInteraction={true}
        modules={[Autoplay, Navigation, Scrollbar]}
        scrollbar={{ draggable: true, hide: true }}
        onSwiper={setSwiper}
      >
        {products?.products?.map((item) => (
          <SwiperSlide
            className="  w-max    justify-center lg:text-right "
            key={item.id}
          >
            <Link
              href={`/products/${item.id}`}
              key={item.id}
              className="!py-0 !max-w-[100px]"
            >
              <div className="cad rounded-xl bg-[white] text-center h-[428px] cursor-pointer ">
                <div className="reltive py-0 w-full ">
                  {" "}
                  {item?.product?.files[0]?.details && (
                    <img
                      quality={50}
                      decoding="async"
                      alt="slider photo"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={item?.product?.files[0]?.details?.location}
                      src={item?.product?.files[0]?.details?.location}
                      className="object-cover !mx-auto  w-[90%] max-w-[300px] max-h-[300px] py-3 rounded-lg"
                    />
                  )}
                  {!item?.product?.files[0] && (
                    <div className="bg-skin-background relative rounded-xl flex items-center h-[270px] max-h-[300px]   w-full  justify-center   ">
                      <Gallery size="80" className="" />
                    </div>
                  )}
                </div>
                <h2 className="font-bold mx-2 my-3 w-fit text-lg text-right">
                  {item?.product.translate[0]?.data}
                </h2>
                <p className="text-[#6F6F6F] w-fit  mx-2 py-2">
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
