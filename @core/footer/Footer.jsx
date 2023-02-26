import { Call, Instagram, Location, Youtube } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import data from "../data/footerData.json";

function Footer() {
  const addresses = useSelector((state) => state.businessSlice?.addresses);
  const phone = useSelector((state) => state.businessSlice?.phone);
  const socials = useSelector((state) => state.businessSlice?.connections);
  const title = useSelector((state) => state.businessSlice?.name);
  console.log(title);

  return (
    <footer className="container block !pt-4 !md:pt-16 border-t-2 border-primary !mt-16 ">
      <section className="!text-center md:mx-auto block   md:flex justify-between ">
        <div className="p-6 md:p-0 md:text-center md:mx-auto  w-full md:w-fit md:mr-0 md:ml-16">
          <h2 className="text-xl text-right  md:text-center">{title}</h2>
          {addresses?.slice(0, 2)?.map((item, index) => (
            <div className="my-8" key={index}>
              <div className="flex text-right">
                <Location
                  size="24"
                  className="text-skin-primary ml-2"
                  variant="Bold"
                />
                <span className="ml-2"> {item.name}-</span>
                <span>{item.address.address}</span>
              </div>
            </div>
          ))}
          <div className="flex">
            {phone?.slice(0, 2)?.map((item, index) => (
              <div className="my-8" key={index}>
                <div className="flex">
                  <Call
                    size="28"
                    className="text-skin-primary ml-2"
                    variant="Bold"
                  />
                  <span className="ml-2"> {item.name}-</span>

                  <a href={`tel:${item.data}`}>{item.data}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[100%] lg:w-[35%] md:text-left  p-6 md:p-0 ">
          <h3 className="text-xl mb-6 text-center">لینک‌های مفید</h3>
          <div className="  mx-auto text-center  ">
            {" "}
            <ul className="!w-full   grid grid-cols-2   text-center    justify-start text-sm lg:text-right md:mr-8 pr-[4rem] md:pr-0 mx-auto">
              {" "}
              {data?.links?.map((item, index) => (
                <li
                  className="w-max   md:w-[100%] list-disc marker:text-skin-primary  marker:text-center text-center md:text-right marker:text-2xl "
                  key={index}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative mx-auto text-center">
          {socials?.length && (
            <div className=" ltr mt-4  mx-auto w-[80%] md:absolute left-0 flex justify-between   text-skin-primary md:mb-4 ">
              {socials?.map((item, index) => (
                <Link
                  href={`${item.connection.prefix}${item.data}`}
                  key={index}
                >
                  <Image
                    quality={50}
                    loading="lazy"
                    height="80"
                    width="80"
                    src={item?.connection?.files[0]?.details?.location}
                    alt="Your SVG"
                    className="w-[3rem]"
                  />
                </Link>
              ))}
            </div>
          )}
          <div className="mx-auto !text-center  my-12 md:mt-24 md:text-left">
            <div className=" flex justify-center  md:justify-end mx-auto text-center">
              {" "}
              <div>
                <Image
                  quality={40}
                  loading="lazy"
                  height="100"
                  width="100"
                  src="/images/footer/footer1.svg"
                  alt="Your SVG"
                />
              </div>
              <div>
                <Image
                  quality={40}
                  loading="lazy"
                  height="100"
                  width="100"
                  src="/images/footer/footer2.svg"
                  alt="Your SVG"
                />
              </div>
              <div>
                <Image
                  quality={40}
                  loading="lazy"
                  height="100"
                  width="100"
                  src="/images/footer/footer3.svg"
                  alt="Your SVG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" text-center m-8 mt-16">
        کلیه حقوق این سایت محفوظ و متعلق به شرکت
        <span className="text-skin-primary"> نگارگر اندیشه </span>
        می‌باشد.
      </div>
    </footer>
  );
}

export default Footer;
