import Head from "next/head";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../footer/Footer";
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
  const businessName = useSelector((state) => state?.businessSlice?.name);
  const logo = useSelector((state) => state?.businessSlice?.logo);

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

  let primaryColor = getRGBColor(colors?.primary_color, "primary");
  let backgroundColor = getRGBColor(colors?.background_color, "background");
  let secondaryColor = getRGBColor(colors?.secondary_color, "secondary");
  let textColor = getRGBColor(colors?.text_color, "text");
  primaryColor = "rgb(100,200,300)";
  backgroundColor = "green";
  secondaryColor = "blue";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{businessName}</title>
        <link rel="shortcut icon" href={logo} />
        <style>
          :root
          {/* {`{${primaryColor} ${backgroundColor} ${secondaryColor} ${textColor} }`} */}
          {`{${primaryColor} ${backgroundColor} ${secondaryColor} ${textColor} }`}
        </style>
      </Head>

      <main className="w-full  h-full p-0 ">
        <div className="z-50">
          <MainNavigation
            open={showMenu}
            selector="#portal"
            onCloseModalHandler={onCloseHandler}
            onCloseHandler={onCloseHandler}
            openModalHandler={openModalHandler}
            showMenu={showMenu}
          />
        </div>
        <div className="pt-[4.5rem] md:pt-[6rem] "> {children}</div>
      </main>
      <Footer />
    </>
  );
};

export default memo(Layout);
