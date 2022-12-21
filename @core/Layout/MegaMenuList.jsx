import React, { useState } from "react";
import classes from "./MegaMenu.module.css";

function MegaMenuList({ item, color, onChangeChildren }) {
  const setBtnActive = (e) => {
    console.log(e.target.value);
    onChangeChildren(item);
  };
  return (
    <section className={classes.section}>
      <button
        className={color ? classes.items : classes.children}
        onClick={setBtnActive}
        value={item.title}
      >
        {item.title}
      </button>
    </section>
  );
}

export default MegaMenuList;
