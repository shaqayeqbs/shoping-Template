import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import Image from "next/image";
import classes from "./Carousel.module.css";

const Carousel = () => {
  //   const slidePerViw4 = data.length < 4 ? data.length : 4;
  //   const slidePerViw3 = data.length < 3 ? data.length : 3;
  //   const slidePerViw2 = data.length < 2 ? data.length : 2;

  return (
    <Swiper
      breakpoints={{
        // 200: {
        //   slidesPerView: slidePerViw2,
        //   slidesPerGroup: slidePerViw2,
        // },
        // 400: {
        //   slidesPerView: slidePerViw3,
        //   slidesPerGroup: slidePerViw3,
        // },
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
      className={classes.container}
    >
      <SwiperSlide>
        <div>
          <Image
            alt="slider photo"
            src="/images/plant.png"
            width={400}
            height={400}
          />
          <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
          <div className={classes.flexBetween}>
            <div className={classes.flex}>
              <div>25%</div>
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
        <div>
          <Image
            alt="slider photo"
            src="/images/plant.png"
            width={400}
            height={400}
          />
          <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
          <div className={classes.flexBetween}>
            <div className={classes.flex}>
              <div>25%</div>
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
        <div>
          <Image
            alt="slider photo"
            src="/images/plant.png"
            width={400}
            height={400}
          />
          <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
          <div className={classes.flexBetween}>
            <div className={classes.flex}>
              <div>25%</div>
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
        <div>
          <Image
            alt="slider photo"
            src="/images/plant.png"
            width={400}
            height={400}
          />
          <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
          <div className={classes.flexBetween}>
            <div className={classes.flex}>
              <div>25%</div>
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
        <div>
          <Image
            alt="slider photo"
            src="/images/plant.png"
            width={400}
            height={400}
          />
          <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
          <div className={classes.flexBetween}>
            <div className={classes.flex}>
              <div>25%</div>
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
        <div>
          <Image
            alt="slider photo"
            src="/images/plant.png"
            width={400}
            height={400}
          />
          <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
          <div className={classes.flexBetween}>
            <div className={classes.flex}>
              <div>25%</div>
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
        <div>
          <Image
            alt="slider photo"
            src="/images/plant.png"
            width={400}
            height={400}
          />
          <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...</h2>
          <div className={classes.flexBetween}>
            <div className={classes.flex}>
              <div>25%</div>
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
  );
};

export default memo(Carousel);
