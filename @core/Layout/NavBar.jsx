import React, { useState } from "react";
import classes from "./Layout.module.css";

import { SearchNormal1, Bag2 } from "iconsax-react";
import ModalVerification from "./modals/ModalVerification";
import ProfileDrop from "../components/main/Profile/ProfileDrop";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";

function NavBar({ onCloseModalHandler }) {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const authHandler = () => {
    setOpenAuthModal((prevState) => !prevState);
  };
  const [businessName, logo] = useSelector((state) => [
    state.businessSlice?.name,
    state.businessSlice?.logo,
  ]);

  const myLoader = ({ src }) => {
    return logo;
  };
  return (
    <>
      {<ModalVerification isOpen={openAuthModal} onClose={authHandler} />}
      <nav
        className="container mx-20 px-0 text-center w-full   !py-6 flex  justify-between border-b-2 border-primary"
        onMouseEnter={onCloseModalHandler}
      >
        <Link href="/">
          <div className="flex">
            <Image
              src="http://core.behzi.net/storage/image/business/logo/1670323071.png"
              width={50}
              height={50}
              loader={myLoader}
              alt="logo"
            />
            <h2 className="mt-5 mx-2"> {businessName}</h2>
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

            <button onClick={authHandler} className={classes.register}>
              {" "}
              ثبت نام | ورود
            </button>
          </div>
          <div className="">
            <ProfileDrop />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
