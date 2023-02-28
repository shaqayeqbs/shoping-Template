import React, { useState } from "react";
import AccordionUI from "../@core/Helper/Accordion/AccordionUI";

function ShopQuestions({ data }) {
  const [Index, setIndex] = useState(false);

  return (
    <div className=" container !mt-16  !py-20">
      <h2 className="mb-10 text-[24px] border-r-[6px] border-primary pr-5 py-2 h-[2.5rem] rounded-sm">
        سوالات متداول
      </h2>
      {data?.map((item) => (
        <div key={item.id} className="py- mb-5 bg-[white] rounded-xl">
          <AccordionUI
            title={item.name}
            Id={item.id}
            child={item?.details}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        </div>
      ))}
    </div>
  );
}

export default ShopQuestions;
