import React, { useState } from "react";
import SearchModal from "./SearchModal";
import { SearchNormal1 } from "iconsax-react";
import { AiOutlineClose } from "react-icons/ai";
import SearchRes from "./SearchRes";
import { getSearchedProducts } from "../../api/productApi";
import { useSelector } from "react-redux";

function SearchForm({ isOpen, onCloseModalHandler }) {
  const [showRes, setShowRes] = useState(true);
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState(null);
  const id = useSelector((state) => state.businessSlice?.id);
  const showResHandler = (item) => {
    setShowRes((prv) => !prv);
  };
  const searchChangeHandler = async (val) => {
    setSearch(val);
    clearTimeout(timer);
    if (search.length <= 3) {
      return;
    } else {
      setTimer(
        setTimeout(async () => {
          const searchedProduct = await getSearchedProducts(id, search);

          // setData(searchedProduct?.inventorys);
        }, 1000)
      );
    }
  };
  return (
    <>
      <SearchModal
        open={isOpen}
        onClose={onCloseModalHandler}
        selector="#portal"
      >
        <form className="  flex h-full">
          <div className="w-full relative  m-auto">
            {" "}
            <input
              type="text"
              maxLength="15"
              onChange={(e) => searchChangeHandler(e.target.value)}
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
      <SearchRes showResHandler={showResHandler} showRes={showRes} />
    </>
  );
}

export default SearchForm;
