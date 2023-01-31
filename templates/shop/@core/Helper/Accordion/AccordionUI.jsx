import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import React from "react";

const AccordionUI = ({ title, child, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group 
        //border-b-2
         border-bordercolor cursor-pointer w-full mx-auto h-16 justify-between  items-center p-2 mt-2  bg-white  focus:bg-pink-500 "
      >
        <div className="flex group cursor-pointer">
          <div className="text-pink-600 font-semibold pl-10 ">{title}</div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <button className="border-0">
              {" "}
              <ArrowUp2 size={20} />
            </button>
          ) : (
            <button className="border-0" onClick={() => handleSetIndex(false)}>
              {" "}
              <ArrowDown2 size={20} />
            </button>
          )}
        </div>
      </div>

      {Index === Id && (
        <div className=" w-full h-auto  rounded-md p-4  mb-2 ">{child}</div>
      )}
    </>
  );
};

export default AccordionUI;
