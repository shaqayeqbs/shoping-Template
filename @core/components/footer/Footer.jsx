import { Call, Instagram, Location, Youtube } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrTwitter } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";
import { useSelector } from "react-redux";
import data from "../../data/footerData.json";

function Footer() {
  const addresses = useSelector((state) => state.businessSlice?.addresses);
  const icons = [
    { id: 6, icon: <Youtube size="32" variant="Bold" /> },
    { id: 2, icon: <Instagram size="32" variant="Bold" /> },
    { id: 3, icon: <SiTelegram size="32" /> },
    { id: 4, icon: <GrTwitter size="32" /> },
  ];

  return (
    <footer className="container block !pt-16 border-t-2 border-primary !mt-16 ">
      <section className="!text-center mx-auto block   md:flex justify-between ">
        <div className="p-6 md:p-0 text-center mx-auto  w-[100%] md:w-fit md:ml-16">
          <h2 className="text-xl text-center">{data.title}</h2>
          {addresses?.map((item, index) => (
            <div className="my-8" key={index}>
              <div className="flex">
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
            <Call size="28" className="text-skin-primary ml-2" variant="Bold" />
            <div>{data.phone}</div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[59%] md:text-left  p-6 md:p-0 ">
          <h3 className="text-xl mb-6 text-center">لینک‌های مفید</h3>
          <div className="  mx-auto  ">
            {" "}
            <ul className="lg:grid grid-cols-2  text-center  w-full gap-2  justify-start text-sm lg:text-right mr-8 mx-auto">
              {" "}
              {data?.links?.map((item) => (
                <li
                  className="w-[70%] md:w-[100%] list-disc marker:text-skin-primary marker:text-center text-center md:text-right marker:text-2xl "
                  key={item.id}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" text-left">
          <div className="text-center mx-auto  flex justify-between  text-skin-primary mb-4 ">
            {icons.map((item) => (
              <div
                key={item.id}
                className="bg-[white] h-[2.5rem] md:w-[2.5rem] p-1 rounded-md mx-2 "
              >
                {item.icon}
              </div>
            ))}
          </div>
          <div className="mx-auto !text-center  my-12 md:text-left">
            <div className=" flex justify-center  md:justify-end mx-auto text-center">
              {" "}
              <div>
                <Image
                  height="100"
                  width="100"
                  src="/images/footer/footer1.svg"
                  alt="Your SVG"
                />
              </div>
              <div>
                <Image
                  height="100"
                  width="100"
                  src="/images/footer/footer2.svg"
                  alt="Your SVG"
                />
              </div>
              <div>
                <Image
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
