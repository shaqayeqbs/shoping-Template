import React, { useState } from "react";
import classes from "./Layout.module.css";
import Logo from "../icons/Logo";
import { SearchNormal1, Bag2 } from "iconsax-react";
import ModalVerification from "./modals/ModalVerification";
import ProfileDrop from "../components/main/Profile/ProfileDrop";
import Link from "next/link";

function NavBar({ onCloseModalHandler }) {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const authHandler = () => {
    console.log({ openAuthModal });
    setOpenAuthModal((prevState) => !prevState);
  };

  return (
    <>
      {<ModalVerification isOpen={openAuthModal} onClose={authHandler} />}
      <nav
        className="container mx-20 px-0 text-center w-full   !py-6 flex  justify-between border-b-2 border-primary"
        onMouseEnter={onCloseModalHandler}
      >
        <Link href="/">
          <div className={classes.logo}>
            {" "}
            <div>
              <Logo />
            </div>
            <h2 className="">باغ هیوا</h2>
          </div>
        </Link>
        <div className="flex">
          {" "}
          <div className={classes.btn}>
            <button>
              {" "}
              <SearchNormal1 size="28" />
            </button>

            <button>
              <Bag2 size="28" />
            </button>

            <button onClick={authHandler}> ثبت نام | ورود</button>
          </div>
          <div className="mr-4">
            <ProfileDrop />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
