import React from "react";
import classes from "./Layout.module.css";
import Logo from "../icons/Logo";
import Link from "next/link";
import { SearchNormal1, Bag2 } from "iconsax-react";

function NavBar() {
  return (
    <nav className="container mx-20 px-0 text-center w-full   !py-6 flex  justify-between border-b-2 border-primary">
      <div className={classes.logo}>
        <div>
          <Logo />
        </div>
        <h2 className="">باغ هیوا</h2>
      </div>
      <div className={classes.btn}>
        <button>
          {" "}
          <SearchNormal1 size="28" />
        </button>

        <button>
          <Bag2 size="28" />
        </button>

        <button>
          <Link href="/">ورود</Link>
        </button>

        <button>
          {" "}
          <Link href="/">ثبت نام</Link>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
