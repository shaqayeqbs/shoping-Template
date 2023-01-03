import React, { memo, useState, useEffect } from "react";
import Navbar from "./NavBar";
import MyLinks from "./MyLinks";
import classes from "./Layout.module.css";
import Footer from "../components/footer/Footer";

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
          <Navbar onCloseModalHandler={onCloseHandler} />
          <div className="container">
            {" "}
            <MyLinks
              onAddClose={onCloseHandler}
              openModal={openModalHandler}
              showMenu={showMenu}
            />
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default memo(Layout);
