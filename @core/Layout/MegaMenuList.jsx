import React from "react";
import classes from "./MegaMenu.module.css";

function MegaMenuList({ item, color, onChangeChildren }) {
  const setBtnActive = (e) => {
    onChangeChildren(item);
  };
  return (
    <section className={classes.section}>
      <div className={color ? classes.items : classes.children}>
        <button onClick={setBtnActive} className="border-0" value={item.title}>
          {item.title}
        </button>
      </div>
    </section>
  );
}

export default MegaMenuList;
