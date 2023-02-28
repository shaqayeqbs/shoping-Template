import useTranslation from "next-translate/useTranslation";
import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderCarousel from "../@core/components/main/Slider/HeaderCarousel";
import { Suspense } from "react";
import LoadingSpinner from "../../../@core/UI/LoadingSpinner";
import AmazingSection from "../@core/components/main/AmazingSale/AmazingSection";
// import Slider from "../@core/components/main/Slider/Slider";
// import Event from "../@core/components/main/Event";
import Description from "../@core/components/main/About/Description";
import AboutUsSection from "../@core/components/main/About/AboutUsSection";

import dynamic from "next/dynamic";
const Slider = dynamic(() => import("../@core/components/main/Slider/Slider"));
const Event = dynamic(() => import("../@core/components/main/Event"));

function ShopHome({ data = null, articles, products }) {
  const [isLoading, setIsLoading] = useState(true);
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
    {
      id: "12",
      image: "/images/plant.png",
      price: "285000",
      new: true,
    },
    { id: "10", image: "/images/plant.png", price: "285000", new: true },
    { id: "11", image: "/images/plant.png", price: "285000", new: true },
    {
      id: "14",
      image: "/images/plant.png",
      price: "285000",
      new: true,
    },
  ];

  const classes = "container  md:flex  ";
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const { description } = useSelector((state) => state.businessSlice);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <main className="overflow-x-hidden">
        <Suspense fallback={<p>Loading feed...</p>}>
          <HeaderCarousel items={banners} />
        </Suspense>
        <Suspense fallback={<p>Loading feed...</p>}>
          <Description />
        </Suspense>
        <Suspense fallback={<p>Loading feed...</p>}>
          <div className=" bg-skin-fill">
            <AmazingSection products={products} />
          </div>
        </Suspense>
        <section className={classes}>
          {events?.slice(2, 4)?.map((item) => (
            <Event event={item} key={item.id} />
          ))}
        </section>
        <div className="container">
          <Slider title="آخرین محصولات" data={products} />
        </div>

        <section className={classes}>
          {events?.slice(0, 2)?.map((item) => (
            <Event event={item} key={item.id} />
          ))}
        </section>
        {/* <div className="container">
          <Slider title="گیاهان آپارتمانی" data={carousel} />
        </div> */}
        {/* <section className="my-10">
          <AboutUsSection />
        </section> */}
        <div className="container">
          <Slider
            title={t("landing:articles")}
            data={articles?.articles}
            articles
          />
        </div>
      </main>
    </>
  );
}

export default memo(ShopHome);
