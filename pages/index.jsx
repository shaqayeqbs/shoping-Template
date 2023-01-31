import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderCarousel from "../@core/components/main/Slider/HeaderCarousel";
// import Slider from "../@core/components/main/Slider/Slider";

import { businessAction } from "../store/Slices/BussinessSlice";
import dynamic from "next/dynamic";
// const HeaderCarousel = dynamic(() =>
//   import("../@core/components/main/Slider/HeaderCarousel")
// );
import mainData from "../@core/utils/serverProps";
const Slider = dynamic(() => import("../@core/components/main/Slider/Slider"));
const AmazingSection = dynamic(() =>
  import("../@core/components/main/AmazingSale/AmazingSection")
);
const Event = dynamic(() => import("../@core/components/main/Event"));
const Description = dynamic(() =>
  import("../@core/components/main/About/Description")
);
const AboutUsSection = dynamic(() =>
  import("../@core/components/main/About/AboutUsSection")
);

function Home({ data = null }) {
  const banners = data?.data?.domin.business.banners;
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { description, events } = useSelector((state) => state.businessSlice);

  useEffect(() => {
    console.log("hereeeee");
    dispatch(businessAction.fetchFirspageData(data));
  }, [description, data, dispatch]);
  console.log(data);

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
      <Head>
        <title>tenant</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HeaderCarousel items={banners} />
        <Description />
        <div className=" bg-skin-fill">
          <AmazingSection />
        </div>
        <section className={classes}>
          {events?.slice(-3, -1).map((item) => (
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
          <Slider title={t("landing:articles")} data={articles} />
        </div>
      </main>
    </>
  );
}

export default memo(Home);

export const getServerSideProps = async (ctx) => {
  let response = await mainData(ctx);

  return {
    props: {
      data: response.data || null,
    },
  };
};
