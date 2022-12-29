import React, { memo } from "react";
import Navbar from "./NavBar";
import MyLinks from "./MyLinks";
import classes from "./Layout.module.css";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <div className={classes.navbar}>
          <Navbar />
          <div className="container">
            {" "}
            <MyLinks />
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default memo(Layout);
