import React from "react";
import Modal from "../../UI/Modal";
import SearchModal from "./SearchModal";
import { CloseCircle } from "iconsax-react";

function SearchRes({ showRes, showResHandler }) {
  return (
    <SearchModal
      open={showRes}
      onClose={showResHandler}
      className="!top-[7rem] w-[50%] text-center flex justify-center  left-[0%] right-[0%] my- rounded-md !mx-auto bg-[white] mt-[-1rem]"
    >
      <button
        onClick={showResHandler}
        className="absolute  left-4 top-4 border-none text-[gray]"
      >
        <CloseCircle />
      </button>
      <div className="lg:max-h-[500px]">jjjjjjjjjjj</div>
    </SearchModal>
  );
}

export default SearchRes;
