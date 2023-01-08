import React, { memo, useState, useEffect } from "react";

import classes from "./Layout.module.css";
import Footer from "../components/footer/Footer";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const openModalHandler = () => {
    setShowMenu(true);
  };
  const onCloseHandler = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [showMenu]);
  return (
    <>
      <main>
        <div className={classes.navbar}>
          <MainNavigation
            open={showMenu}
            selector="#portal"
            onCloseModalHandler={onCloseHandler}
            onCloseHandler={onCloseHandler}
            openModalHandler={openModalHandler}
            showMenu={showMenu}
          />
          {/* <Navbar onCloseModalHandler={onCloseHandler} />
          <div className="container">
            {" "}
            <MyLinks
              onAddClose={onCloseHandler}
              openModal={openModalHandler}
              showMenu={showMenu}
            />
          </div> */}
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default memo(Layout);
