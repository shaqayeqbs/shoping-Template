import Head from "next/head";
import AmazingSection from "../@core/components/main/AmazingSale/AmazingSection";
import Event from "../@core/components/main/Event";
import Slider from "../@core/components/main/Slider/Slider";
import AboutUsSection from "../@core/components/main/About/AboutUsSection";
import Description from "../@core/components/main/About/Description";
import HeaderCarousel from "../@core/components/main/Slider/HeaderCarousel";

export default function Home() {
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
  const eventDummyData = [
    {
      id: "5",
      image: "/images/event.png",
      precent: "20٪",
      description: " انواع گیاهان آپارتمانی",
      color: "#238B44",
    },
    {
      id: "6",
      image: "/images/event.png",
      precent: "15٪",
      description: " انواع تراریوم زینتی ",
      color: "#45BCE1",
    },
  ];
  const event2_DummyData = [
    {
      id: "7",
      image: "/images/event.png",
      title: "يک بغل محبت",
      description: "انواع دسته گل",
      color: "#EC8916",
    },
    {
      id: "8",
      image: "/images/event.png",
      title: "انتخاب خاص و لوکس",
      description: "  انواع باکس های گل",
      color: "#D71F46",
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

  const classes = "container flex gap-0 justify-around  text-2xl h-[23rem]";

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderCarousel items={headerCarousel} />
        <Description />
        <div className=" bg-skin-fill">
          <AmazingSection />
        </div>
        <section className={classes}>
          {eventDummyData.map((item) => (
            <Event event={item} key={item.id} />
          ))}
        </section>

        <Slider title="گلدان های جدید" data={carousel} />
        <section className={classes}>
          {event2_DummyData.map((item) => (
            <Event event={item} key={item.id} />
          ))}
        </section>
        <Slider title="گیاهان آپارتمانی" data={carousel} />
        <section className="my-10">
          <AboutUsSection />
        </section>
        <Slider title="مقالات اخیر " data={articles} />
      </main>
    </>
  );
}
