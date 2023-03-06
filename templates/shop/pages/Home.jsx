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

import dynamic from "next/dynamic";
const Slider = dynamic(() => import("../@core/components/main/Slider/Slider"));
const Event = dynamic(() => import("../@core/components/main/Event"));

function ShopHome({ data = null, articles, products, offProducts }) {
  const [isLoading, setIsLoading] = useState(true);
  const banners = data?.data?.domin.business.banners;

  const { t } = useTranslation();
  const { events } = useSelector((state) => state.businessSlice);

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
  console.log(products, "pro", offProducts);

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
          {offProducts?.length > 0 && (
            <div className=" bg-skin-fill">
              <AmazingSection products={offProducts} />
            </div>
          )}
        </Suspense>
        <section className={classes}>
          {events?.slice(2, 4)?.map((item) => (
            <Event event={item} key={item.id} />
          ))}
        </section>
        <div className="container">
          <Slider title="آخرین محصولات" data={products} type="products" />
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
            type="articles"
          />
        </div>
      </main>
    </>
  );
}

export default memo(ShopHome);
