import React from "react";
import { DescriptionData } from "../../../data/description";

function Description() {
  return (
    <section className="container flex justify-between ">
      {DescriptionData?.map((item, index) => (
        <div className="flex relative my-16" key={index}>
          <div className="absolute top-1 text-skin-primary">{item.icon}</div>
          <div className="mr-12">
            <h3 className="font-bold text-xl mb-1">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Description;
