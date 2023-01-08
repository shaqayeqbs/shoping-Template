import React from "react";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("./Carousel"), { ssr: false });

function NewProducts({ data, title }) {
  return (
    <section className="container block  text-center">
      <div className=" flex justify-between my-8">
        <h2 className="font-bold text-2xl mx-3">{title}</h2>
        <div className=" relative flex text-skin-primary text-md">
          <Link href="/products" className="cursor-pointer">
            <div className="font-bold">
              <div className="mx-8"> مشاهده همه</div>
              <div className="absolute left-0 top-[6px]">
                <AiOutlineLeft />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Carousel data={data} />
    </section>
  );
}

export default NewProducts;
