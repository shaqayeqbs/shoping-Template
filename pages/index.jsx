import Head from "next/head";
import AmazingSection from "../@core/components/main/AmazingSale/AmazingSection";
import Event from "../@core/components/main/Event";
import Slider from "../@core/components/main/Slider/Slider";
import AboutUsSection from "../@core/components/main/About/AboutUsSection";
import Description from "../@core/components/main/About/Description";
import HeaderCarousel from "../@core/components/main/Slider/HeaderCarousel";
import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import { useDispatch } from "react-redux";
import { businessAction } from "../store/Slices/BussinessSlice";
import { bussinessByDomainApi } from "../@core/api/BussinessApi";
import { useEffect } from "react";

export default function Home({ data = null }) {
  console.log({ data }, "dddddddddddddddddddd");
  const banners = data.data.domin.business.banners;
  console.log({ banners });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(businessAction.fetchFirspageData(data));
    return () => {};
  }, []);

  const { t } = useTranslation();
  const [description, events] = useSelector((state) => [
    state.businessSlice?.description,
    state.businessSlice?.events,
  ]);

  const headerCarousel = [
    {
      id: "130",
      color: "#238B44",
      title: "تاثیرات گیاهان بر روان انسان",
      description: "رابطه بین گل و گیاه و سلامت روانی",
      href: "/",
      image: "/images/plant.png",
    },
    {
      id: "2",
      color: "#76A3A6",
      title: "تاثیرات گیاهان بر روان انسان",
      description: "رابطه بین گل و گیاه و سلامت روانی",
      href: "/",
      image: "/images/slider1.png",
    },
    {
      id: "3",
      color: "#c9A6A6",
      title: "تاثیرات گیاهان بر روان انسان",
      description: "رابطه بین گل و گیاه و سلامت روانی",
      href: "/",
      image: "/images/slider1.png",
    },
    {
      id: "4",
      color: "#76A7B6",
      title: "تاثیرات گیاهان بر روان انسان",
      description: "رابطه بین گل و گیاه و سلامت روانی",
      href: "/",
      image: "/images/slider1.png",
    },
  ];

  const carousel = [
    {
      id: "9",
      image: "/images/plant.png",
      price: "285,000",
      new: true,
    },
    { id: "10", image: "/images/plant.png", price: "285,000", new: true },
    { id: "11", image: "/images/plant.png", price: "285,000", new: true },
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
        <title>Create Next App</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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

        <Slider title="گلدان های جدید" data={carousel} />
        <section className={classes}>
          {events?.slice(0, 2).map((item) => (
            <Event event={item} key={item.id} />
          ))}
        </section>
        <Slider title="گیاهان آپارتمانی" data={carousel} />
        <section className="my-10">
          <AboutUsSection />
        </section>

        <Slider title={t("landing:articles")} data={articles} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  let response = await bussinessByDomainApi();
  // let response = await axios(
  //   "http://core.behzi.net/api/business/byDomin/zaay.ir?lang=fa"
  // );

  return {
    props: {
      data: response?.data || null,
    },
  };
};
