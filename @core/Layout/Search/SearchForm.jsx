import React from "react";
import SearchModal from "./SearchModal";
import { SearchNormal1 } from "iconsax-react";
import { AiOutlineClose } from "react-icons/ai";

function SearchForm({ isOpen, onCloseModalHandler }) {
  return (
    <SearchModal open={isOpen} onClose={onCloseModalHandler} selector="#portal">
      <form className="  flex h-full">
        <div className="w-full relative  m-auto">
          {" "}
          <input
            type="text"
            className="bg-skin-secondary w-[50%] m-auto rounded-xl p-[9px] pr-[3.5rem]"
          />
          <div className=" mx-auto text-left mt-[-2.2rem] px-4 text-skin-primary  w-[50%]">
            <SearchNormal1 size="28" />
          </div>
          <button
            onClick={onCloseModalHandler}
            className="border-0 flex z-30 h-[3rem] mx-auto text-left  mt-[-1.8rem] text-[25px] ltr px-4 text-skin-primary  w-[50%]"
          >
            <AiOutlineClose />
          </button>
        </div>
      </form>
    </SearchModal>
  );
}

export default SearchForm;
