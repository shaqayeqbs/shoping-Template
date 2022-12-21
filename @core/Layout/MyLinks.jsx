import React, { useState } from "react";
import classes from "./Layout.module.css";
import MegaMenu from "./MegaMenu";

function MyLinks() {
  const [showMenu, setShowMenu] = useState(false);
  const openModalHandler = () => {
    setShowMenu(true);
  };
  return (
    <>
      {showMenu && (
        <MegaMenu
          isOpen={showMenu}
          onCloseModalHandler={() => {
            setShowMenu(false);
          }}
        />
      )}
      <ul className={classes.links}>
        <li>
          <button onMouseEnter={openModalHandler}> دسته بندی</button>
        </li>
        <li className={classes.color}>شگفت انگیزها</li>
        <li>مقالات</li>
        <li>درباره ما</li>
        <li>تماس با ما</li>
      </ul>
    </>
  );
}

export default MyLinks;
