import React, { useState } from "react";
import classes from "./MegaMenu.module.css";
import Link from "next/link";

function MegaMenuList({ item, color, onChangeChildren }) {
  const setBtnActive = (e) => {
    console.log(e.target.value);
    onChangeChildren(item);
  };
  return (
    <section className={classes.section}>
      <div className={color ? classes.items : classes.children}>
        <Link href="/" onClick={setBtnActive} value={item.title}>
          {item.title}
        </Link>
      </div>
    </section>
  );
}

export default MegaMenuList;
