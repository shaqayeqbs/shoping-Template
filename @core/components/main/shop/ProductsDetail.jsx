import React from "react";
import Slider from "../Slider/Slider";
import Image from "next/image";
import useTimer from "../../../hooks/useTimer";

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

function ProductsDetail({ item }) {
  const [hours, minutes, seconds, Faminutes, FaHours, Faseconds] = useTimer();
  console.log({ item });
  const timerBtn = "bg-skin-opacity p-2 px-4 text-skin-primary rounded-md";
  const timerDevider = "text-skin-primary mx-2";
  return (
    <>
      <div className="container">{item.id}</div>
      <section className="cadr container flex  !p-8">
        <div>
          <Image src={item.image} width={400} height={400} />
        </div>
        <div className="w-full">
          <h2 className="text-right m-6">{item.title}</h2>
          <div className="flex justify-between">
            <div>
              <span>برند:</span>
              <span>{item.brand}</span>
              <div>4.3 از 20 رای</div>
            </div>
            <div>
              <span>دسته بندی:</span>
              <span>{item.category}</span>
              <div>20 نظر</div>
            </div>
            <div>
              {(hours === 0) & (minutes === 0) && seconds === 0 ? null : (
                <h3 className="text-center my-4" dir="ltr">
                  <span className={timerBtn}>{FaHours}</span>
                  <span className={timerDevider}>:</span>
                  <span className={timerBtn}>{Faminutes}</span>{" "}
                  <span className={timerDevider}>:</span>
                  {seconds < 10 ? (
                    <span className={timerBtn}>۰{Faseconds}</span>
                  ) : (
                    <span className={timerBtn}>{Faseconds}</span>
                  )}
                </h3>
              )}
            </div>
          </div>
        </div>
      </section>
      <Slider title="گلدان های جدید" data={carousel} />
    </>
  );
}

export default ProductsDetail;
