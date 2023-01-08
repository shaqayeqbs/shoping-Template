import React from "react";
import { DescriptionData } from "../../../data/description";

function Description() {
  return (
    <section className="container  md:flex md:justify-between  ">
      {DescriptionData?.map((item) => (
        <div
          className="block md:flex  relative my-16 text-center mx-auto "
          key={item.id}
        >
          <div className="block md:absolute  top-1 mx-[22%] md:mx-0 text-skin-primary ">
            {item.icon}
          </div>
          <div className="md:mr-12">
            <h3 className="font-bold text-xl mb-1 text-center">{item.title}</h3>
            <p className="text-sm text-center">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Description;
