import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
const Carousel = dynamic(() => import("./Carousel"));

function NewProducts({ data, title, regular, value, onIndexHandler }) {
  const content = (
    <div className="font-bold">
      <div className="mx-8"> مشاهده همه</div>
      <div className="absolute left-0 top-[6px]">
        <AiOutlineLeft />
      </div>
    </div>
  );
  const changeIndex = (e) => {
    // console.log(e.target.value);
    onIndexHandler(e?.target?.value);
  };
  return (
    <section className=" block  text-center">
      <div className=" flex justify-between my-8">
        <h2 className={regular ? "pr-6" : "font-bold text-2xl mx-3"}>
          {title}
        </h2>
        <div className=" relative flex text-skin-primary text-md">
          {regular && (
            <button
              value={value}
              onClick={changeIndex}
              className="border-0 flex"
            >
              مشاهده همه
              <div className="mt-1 mr-1">
                <AiOutlineLeft />
              </div>
            </button>
          )}
          {!regular && (
            <Link href="/products" className="cursor-pointer">
              {content}
            </Link>
          )}
        </div>
      </div>
      <Carousel data={data} />
    </section>
  );
}

export default NewProducts;
