import React from "react";
import { DescriptionData } from "../../../data/description";

function Description() {
  return (
    <section className="container  text-sm  text-center justify-center flex   ">
      {DescriptionData?.map((item) => (
        <div
          className="block md:flex justify-end text-[10px] relative my-16 text-center mx-auto "
          key={item.id}
        >
          <div className="inline-block   items-center  top-1  !mx-4 md:mx-auto text-skin-primary ">
            {item.icon}
          </div>
          <div className=" text-[12px]  ">
            <h3 className="font-bold w-full text-md  md:text-xl mb-1 text-center">
              {item.title}
            </h3>
            <p className="text-[10px] w-full md:text-sm text-center">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Description;
