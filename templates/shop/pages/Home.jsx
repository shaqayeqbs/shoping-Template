import useTranslation from "next-translate/useTranslation";
import { memo } from "react";
import { useSelector } from "react-redux";
import HeaderCarousel from "../@core/components/main/Slider/HeaderCarousel";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import AmazingSection from "../@core/components/main/AmazingSale/AmazingSection";
const Slider = dynamic(() => import("../@core/components/main/Slider/Slider"));
const Event = dynamic(() => import("../@core/components/main/Event"));
const Description = dynamic(() =>
  import("../@core/components/main/About/Description")
);
const AboutUsSection = dynamic(() =>
  import("../@core/components/main/About/AboutUsSection")
);

function ShopHome({ data = null }) {
  const banners = data?.data?.domin.business.banners;

  const { t } = useTranslation();
  const { events } = useSelector((state) => state.businessSlice);

  const carousel = [
    {
      id: "9",
      image: "/images/plant.png",
      price: "285000",
      new: true,
    },
    { id: "10", image: "/images/plant.png", price: "285000", new: true },
    { id: "11", image: "/images/plant.png", price: "285000", new: true },
  ];

  const articles = [
    {
      id: "12",
      image: "/images/article.png",
      title: "نحوه نگهداری سانسوریا",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: "13",
      image: "/images/article.png",
      title: "نحوه نگهداری سانسوریا",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: "14",
      image: "/images/article.png",
      title: "نحوه نگهداری سانسوریا",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
  ];

  const classes = "container  md:flex  ";

  return (
    <>
      <main>
        <Suspense fallback={<p>Loading feed...</p>}>
          <HeaderCarousel items={banners} />
        </Suspense>

        <Suspense fallback={<p>Loading feed...</p>}>
          <Description />
        </Suspense>

        <Suspense fallback={<p>Loading feed...</p>}>
          <div className=" bg-skin-fill">
            <AmazingSection />
          </div>
        </Suspense>

        <section className={classes}>
          {events?.slice(2, 4).map((item) => (
            <Event event={item} key={item.id} />
          ))}
        </section>
        <div className="container">
          <Slider title="گلدان های جدید" data={carousel} />
        </div>

        <section className={classes}>
          {events?.slice(0, 2).map((item) => (
            <Event event={item} key={item.id} />
          ))}
        </section>
        <div className="container">
          <Slider title="گیاهان آپارتمانی" data={carousel} />
        </div>

        <section className="my-10">
          <AboutUsSection />
        </section>
        <div className="container">
          <Slider title={t("landing:articles")} data={articles} articles />
        </div>
      </main>
    </>
  );
}

export default memo(ShopHome);
