import React from "react";
import classes from "./MegaMenu.module.css";

function MegaMenuList({ item, color, onChangeChildren }) {
  console.log({ item });
  const setBtnActive = (e) => {
    onChangeChildren(item);
  };
  return (
    <section className={classes.section}>
      <div
        className={
          color
            ? ""
            : "border-r-2 m-4 text-[black] border-primary hover:text-skin-primary"
        }
      >
        <button
          onClick={setBtnActive}
          className={
            color
              ? "border-0 py-[.8rem] px-[2rem] text-skin-primary hover:bg-skin-fill w-[100%] hover:text-[white]"
              : "border-0 py-[.8rem] px-[2rem]"
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
