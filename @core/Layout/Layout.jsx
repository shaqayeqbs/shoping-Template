import Head from "next/head";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import { getRGBColor } from "../Helper/getColor";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
// import dynamic from "next/dynamic";

// import Banner from "components/Banner";

// const MainNavigation = dynamic(() => import("./MainNavigation"));

// const Footer = dynamic(() => import("../components/footer/Footer"));

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { colors } = useSelector((state) => state.businessSlice);

  const openModalHandler = () => {
    setShowMenu(true);
  };
  const onCloseHandler = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      // document.body.style.overflow = "hidden";
      document.body.style.overflow = "initial";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [showMenu]);

  const primaryColor = getRGBColor(colors?.primary_color, "primary");
  const backgroundColor = getRGBColor(colors?.background_color, "background");
  const secondaryColor = getRGBColor(colors?.secondary_color, "secondary");
  const textColor = getRGBColor(colors?.text_color, "text");

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <style>
          :root{" "}
          {`{${primaryColor} ${backgroundColor} ${secondaryColor} ${textColor} }`}
        </style>
      </Head>
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
        </div>
        <div className="pt-[4.5rem] md:pt-[11rem]"> {children}</div>
      </main>
      <Footer />
    </>
  );
};

export default memo(Layout);
