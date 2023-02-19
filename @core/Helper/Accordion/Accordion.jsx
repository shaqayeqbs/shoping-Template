import React, { useState } from "react";
import AccordionUI from "./AccordionUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "دسته بندی",
      answer: "The React Framework for Production",
    },
    {
      id: 2,
      question: "برند",
      answer:
        "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    },
    {
      id: 3,
      question: "محدوده قیمت",
      answer:
        " a visual object or experience consciously created through an expression of skill or imagination.",
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center items-center    rounded-xl h-auto py-4 bg-gray-50">
      {data.map((data, index) => (
        <AccordionUI
          key={index}
          title={data.question}
          Id={data.id}
          children={data.answer}
          Index={Index}
          setIndex={setIndex}
        ></AccordionUI>
      ))}
    </div>
  );
};
export default Accordion;
