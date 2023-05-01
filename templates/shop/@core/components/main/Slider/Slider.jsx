// import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import ArticleCarousel from "./ArticleCarousel";
// import Carousel from "./Carousel";
import ProductCarousel from "./ProductCarousel";
// const Carousel = dynamic(() => import("./Carousel"));

function NewProducts({ data, title, type }) {
  console.log(data, "products");
  return (
    <section className=" block  text-center">
      <div className=" flex justify-between my-8">
        <h2 className={"font-bold md:text-2xl mx-3"}>{title}</h2>
        <div className=" relative flex text-skin-primary text-md">
          <Link
            href={
              type === "articles"
                ? "/articles"
                : type === "products"
                ? "/products"
                : "later for other pathes"
            }
            className="cursor-pointer"
          >
            <div className="font-bold">
              <div className="mx-8"> مشاهده همه</div>
              <div className="absolute left-0 top-[6px]">
                <AiOutlineLeft />
              </div>
            </div>
          </Link>
          {/* )} */}
        </div>
      </div>
      {type === "articles" && <ArticleCarousel data={data} />}
      {type === "products" && <ProductCarousel data={data} type="products" />}
    </section>
  );
}

export default NewProducts;
