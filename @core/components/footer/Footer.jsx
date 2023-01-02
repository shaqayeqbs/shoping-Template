import React from "react";
import data from "../../data/footerData.json";
import { Youtube, Instagram, Location, Call } from "iconsax-react";
import { SiTelegram } from "react-icons/si";
import { GrTwitter } from "react-icons/gr";
import Image from "next/image";

function Footer() {
  const icons = [
    { id: 6, icon: <Youtube size="32" /> },
    { id: 2, icon: <Instagram size="32" /> },
    { id: 3, icon: <SiTelegram size="32" /> },
    { id: 4, icon: <GrTwitter size="32" /> },
  ];
  console.log(data.links);
  return (
    <footer className="container  !pt-16 border-t-2 border-primary !mt-16 ">
      <section className="flex justify-between">
        <div className="w-[30%] ml-16">
          <h2 className="text-xl">{data.title}</h2>
          {data?.address.map((item) => (
            <div className="my-8" key={item.id}>
              <div className="flex">
                <Location
                  size="32"
                  className="text-skin-primary ml-2"
                  variant="Bold"
                />
                {item.detail}
              </div>
            </div>
          ))}
          <div className="flex">
            <Call size="32" className="text-skin-primary ml-2" variant="Bold" />
            <div>{data.phone}</div>
          </div>
        </div>
        <div className="w-[29%] text-left ">
          <h3 className="text-xl mb-6 text-center">لینک‌های مفید</h3>
          <div className=" bg-[r] text-left">
            {" "}
            <ul className="grid grid-cols-2 w-full gap-2  justify-start text-sm text-right mr-8">
              {" "}
              {data?.links?.map((item) => (
                <li
                  className="mx-0 w-[60%] list-disc marker:text-skin-primary marker:text-2xl "
                  key={item.id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[30%]  text-left">
          <div className=" flex justify-between w-[30%] text-skin-primary mb-4 mx-auto">
            {icons.map((item) => (
              <div
                key={item.id}
                className="bg-[white] h-[2.5rem] w-[2.5rem] p-1 rounded-md mx-2 "
              >
                {item.icon}
              </div>
            ))}
          </div>
          <div className="flex justify-end my-12 text-left">
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
