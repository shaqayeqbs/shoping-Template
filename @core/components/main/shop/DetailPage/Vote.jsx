import React from "react";
import { FaStar } from "react-icons/fa";
function Vote() {
  return (
    <div className="flex ju text-right">
      <div className="flex text-[12px] justify-center rounded-md  bg-[#f6f6f6] p-1  mt-3 mr-0 text-center">
        <div> 4.3</div>
        <div className="mx-1 text-[#ff8d14] p-1">
          <FaStar />
        </div>
      </div>
      <div className="mt-4 mx-2 text-[12px]">از 20 رای</div>
    </div>
  );
}

export default Vote;
