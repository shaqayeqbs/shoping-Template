import { digitsEnToFa } from "@persian-tools/persian-tools";
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
  const logo = useSelector((state) => state.businessSlice?.logo);

  return (
    <footer className="container block !pt-4 !md:pt-16 border-t-2 border-primary !mt-16 ">
      <section className="!text-center md:mx-auto block   xl:flex justify-between ">
        <div className="md:flex justify-between">
          <div className="p-6 md:p-0 md:text-center md:mx-auto  w-full md:w-fit md:mr-0 md:ml-16">
            <div className="flex items-center">
              <img src={logo} className="w-16 rounded-full ml-3" />
              <h2 className="text-xl text-right  md:text-center">{title}</h2>
            </div>
            {addresses?.slice(0, 2)?.map((item, index) => (
              <div className="my-8" key={index}>
                <div className="flex text-right w-full">
                  <Location
                    size="24"
                    className="text-skin-primary ml-2 w-8"
                    variant="Bold"
                  />
                  {/* <span className="ml-2 whitespace-nowrap"> {item.name}</span> */}
                  <span className="w-[90%]">{item.address.address}</span>
                </div>
              </div>
            ))}
            <div className="flex items-center">
              <Call
                size="24"
                className="text-skin-primary ml-2"
                variant="Bold"
              />
              {phone?.slice(0, 2)?.map((item, index) => (
                <div className="flex" key={index}>
                  <span className="ml-2"> {item.name}</span>
                  <a className="pb-0" href={`tel:${item.data}`}>
                    {digitsEnToFa(item.data)}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[100%] lg:w-[35%] md:text-left  p-6 md:p-0 lg:mt-4 xl:ml-6 mx-auto">
            <h3 className="text-xl mb-6 text-center">لینک‌های مفید</h3>
            <div className="  mx-auto text-center ">
              {" "}
              <ul className="!w-fit min-w-[320px]  grid grid-cols-2   text-center  pr-16  justify-start text-sm lg:text-right md:mr-8 md:pr-0 mx-auto">
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
        </div>
        <div className="relative mx-auto text-center min-w-[200px] mt-8">
          {socials?.length && (
            <div className=" ltr mt-4  mx-auto w-[80%]  flex justify-between   text-skin-primary md:mb-4 ">
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
          <div className="mx-auto !text-center  my-12 md:text-left">
            <div className=" flex justify-center mx-auto text-center">
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
        <span className="text-skin-primary"> فروشگاه </span>
        می‌باشد.
      </div>
    </footer>
  );
}

export default Footer;
