import React from "react";
import { DescriptionData } from "../../../data/description";

function Description() {
  return (
    <section className="container  text-sm text--lg flex md:justify-between  ">
      {DescriptionData?.map((item) => (
        <div
          className="block md:flex text-[10px] w-full relative my-16 text-center mx-auto "
          key={item.id}
        >
          <div className="inline-block  md:absolute items-center  top-1 mx-[10%] md:mx-auto text-skin-primary ">
            {item.icon}
          </div>
          <div className="md:mr-12 text-[12px] w-full">
            <h3 className="font-bold text-md md:text-xl mb-1 text-center">
              {item.title}
            </h3>
            <p className="text-[10px] md:text-sm w-full text-center">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Description;
