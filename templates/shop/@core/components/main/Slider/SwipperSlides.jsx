import Link from "next/link";
import Image from "next/image";
function LandingCarouselSlide({ itemData: item }) {
  return (
    <Link href={item.link} className="mx-4 ">
      <div className="relative  py-20 px-8  pb-32 cursor-pointer">
        <Image
          quality={30}
          priority
          className="absolute w-full h-full top-0 blur-xl z-0"
          src={item?.file[0]?.details.location}
          alt="cover"
          layout="fill"
        />

        <div
          style={{ zIndex: 100 }}
          className="container w-full overflow-hidden gap-5 md:flex relative justify-between block md:flex-row-reverse z-50 cadr"
        >
          <div className="relative w-full h-[12rem] !md:h-[419px]">
            <Image
              quality={30}
              priority
              src={
                item?.file[0]?.details.location
                  ? item?.file[0]?.details.location
                  : "/"
              }
              alt={item?.file[0]?.details.location}
              layout="fill"
              className="object-cover !h-[14rem] block  rounded-xl  !md:h-[419px] z-30"
            />
          </div>
          <div className="w-full md:translate-y-[10%] md:w-[30%] pr-6 pb-20 pt-0 p-9  text-right">
            <h1 className=" md:text-[32px] md:leading-[54.5px] font-extrabold mt-14 my-6 md:my-8 text-right ">
              {item.title}
            </h1>
            <p className="text-lg">{item.sub_title}</p>
            <button
              className="border-2  rounded-lg p-2 px-8 mt-4 md:my-8"
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
