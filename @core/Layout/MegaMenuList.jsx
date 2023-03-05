import React from "react";
import classes from "./MegaMenu.module.css";

function MegaMenuList({ item, color, onChangeChildren, children }) {
  console.log({ item });
  const setBtnActive = (e) => {
    onChangeChildren(item);
  };
  return (
    <section className={color ? "" : ""}>
      <div
        className={
          color
            ? ""
            : "border-r-4 my-3 p-0  w-max max-h-[3rem]   text-[black] border-primary hover:text-skin-primary"
        }
      >
        <button
          onClick={setBtnActive}
          className={
            color
              ? "border-0 text-right py-[.8rem] px-[2rem] text-skin-primary hover:bg-skin-fill w-[100%] hover:text-[white]"
              : "border-0 py-[.rem] px-[2rem]"
          }
          value={item?.translate?.data}
        >
          {item?.translate[0]?.data}
        </button>
      </div>
    </section>
  );
}

export default MegaMenuList;
