import Link from "next/link";
import Image from "next/image";
function LandingCarouselSlide({ itemData: item, swiper }) {
  console.log(item, "itme");
  return (
    <Link href={item.href} className="mx-4 ">
      <div className="relative pt-0 lg:pt-20  pt-20 pb-40 overflow-hidden lg:px-8  pb-32 cursor-pointer">
        <Image
          quality={30}
          priority
          className="absolute  top-0 backdrop-blur-lg blur-lg  overflow-hidden backdrop-brightness-0 z-0"
          src={item?.image}
          alt="cover"
          layout="fill"
        />

        <div
          style={{ zIndex: 100 }}
          className="container    md:flex relative justify-between block md:flex-row-reverse z-50 bg-[white] !p-[9px] rounded-xl "
        >
          <div
            className="relative w-full h-[12rem] md:!h-[419px]"
            onMouseLeave={() => {
              console.log("first");
              swiper?.autoplay?.start();
            }}
            onMouseOver={() => {
              console.log("over");
              swiper?.autoplay?.stop();
            }}
          >
            <Image
              quality={30}
              priority
              src={item?.image ? item?.image : "/"}
              alt={item?.image}
              layout="fill"
              className="object-cover !h-[14rem] block  rounded-xl  md:!h-[419px] z-30"
            />
          </div>
          <div className="w-full md:translate-y-[10%] md:w-[30%] pr-6 lg:pb-20 pt-0 p-9  text-right">
            <h1 className=" md:text-[32px] md:leading-[54.5px] font-extrabold mt-14 my-6 md:my-8 text-right ">
              {item.title}
            </h1>
            <p className="text-lg">{item.sub_title}</p>
            <button
              className="border-2  rounded-lg p-2 lg:px-8 mt-4 md:my-8"
              style={{ color: item.color, borderColor: item.color }}
            >
              مشاهده
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LandingCarouselSlide;
