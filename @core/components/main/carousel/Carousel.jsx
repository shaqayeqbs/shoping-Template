import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import Image from "next/image";
import classes from "./Carousel.module.css";

const Carousel = () => {
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
        <SwiperSlide>
          <div className={classes.CarouselItem}>
            <Image
              alt="slider photo"
              src="/images/plant.png"
              width={400}
              height={400}
              className={classes.image}
            />
            <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
            <div className={classes.flexBetween}>
              <div>25%</div>
              <div className={classes.flex}>
                <div>
                  <div>285٬000</div>
                  <p>400٬000٬000</p>
                </div>
                <div>تومان</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.CarouselItem}>
            <Image
              alt="slider photo"
              src="/images/plant.png"
              width={400}
              height={400}
              className={classes.image}
            />
            <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
            <div className={classes.flexBetween}>
              <div>25%</div>
              <div className={classes.flex}>
                <div>
                  <div>285٬000</div>
                  <p>400٬000٬000</p>
                </div>
                <div>تومان</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.CarouselItem}>
            <Image
              alt="slider photo"
              src="/images/plant.png"
              width={400}
              height={400}
              className={classes.image}
            />
            <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
            <div className={classes.flexBetween}>
              <div>25%</div>
              <div className={classes.flex}>
                <div>
                  <div>285٬000</div>
                  <p>400٬000٬000</p>
                </div>
                <div>تومان</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.CarouselItem}>
            <Image
              alt="slider photo"
              src="/images/plant.png"
              width={400}
              height={400}
              className={classes.image}
            />
            <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
            <div className={classes.flexBetween}>
              <div>25%</div>
              <div className={classes.flex}>
                <div>
                  <div>285٬000</div>
                  <p>400٬000٬000</p>
                </div>
                <div>تومان</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.CarouselItem}>
            <Image
              alt="slider photo"
              src="/images/plant.png"
              width={400}
              height={400}
              className={classes.image}
            />
            <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
            <div className={classes.flexBetween}>
              <div>25%</div>
              <div className={classes.flex}>
                <div>
                  <div>285٬000</div>
                  <p>400٬000٬000</p>
                </div>
                <div>تومان</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.CarouselItem}>
            <Image
              alt="slider photo"
              src="/images/plant.png"
              width={400}
              height={400}
              className={classes.image}
            />
            <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
            <div className={classes.flexBetween}>
              <div>25%</div>
              <div className={classes.flex}>
                <div>
                  <div>285٬000</div>
                  <p>400٬000٬000</p>
                </div>
                <div>تومان</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.CarouselItem}>
            <Image
              alt="slider photo"
              src="/images/plant.png"
              width={400}
              height={400}
              className={classes.image}
            />
            <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
            <div className={classes.flexBetween}>
              <div>25%</div>
              <div className={classes.flex}>
                <div>
                  <div>285٬000</div>
                  <p>400٬000٬000</p>
                </div>
                <div>تومان</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default memo(Carousel);
