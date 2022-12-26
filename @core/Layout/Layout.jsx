import React, { memo } from "react";
import Navbar from "./NavBar";
import MyLinks from "./MyLinks";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div dir="rtl">
      <section className="">
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
      </section>
    </div>
  );
};

export default memo(Layout);
