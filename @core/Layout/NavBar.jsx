import React from "react";
import classes from "./Layout.module.css";
import BagIcon from "../icons/Bag";
import SearchIcon from "../icons/Search";
import Logo from "../icons/Logo";

function NavBar() {
  return (
    <nav className={classes.container}>
      <div className={classes.logo}>
        <div>
          <Logo />
        </div>
        <h2>باغ هیوا</h2>
      </div>
      <div className={classes.btn}>
        <button>
          <SearchIcon />
        </button>
        <button>
          <BagIcon />
        </button>
        <button>ورود</button>
        <button className={classes.register}> ثبت نام</button>
      </div>
    </nav>
  );
}

export default NavBar;
