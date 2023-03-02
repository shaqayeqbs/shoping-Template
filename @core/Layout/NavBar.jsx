import { SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
// import ProfileDrop from "../components/main/Profile/ProfileDrop";
import ModalVerification from "./modals/ModalVerification";
import ProfileDrop from "../Profile/ProfileDrop";

import CartBtn from "./CartBtn";
import SearchForm from "./Search/SearchForm";

function NavBar({ onCloseModalHandler }) {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const authHandler = () => {
    setOpenAuthModal((prevState) => !prevState);
  };
  const showSearchHandler = () => {
    setShowSearchForm((prev) => !prev);
  };
  const businessName = useSelector((state) => state?.businessSlice?.name);
  const logo = useSelector((state) => state?.businessSlice?.logo);
  const isLoggedIn = useSelector((state) => state?.user.isLoggedIn);

  return (
    <>
      {<ModalVerification isOpen={openAuthModal} onClose={authHandler} />}
      {showSearchForm && (
        <SearchForm
          isOpen={showSearchForm}
          onCloseModalHandler={showSearchHandler}
        />
      )}
      <nav
        className="container !pt-[1rem] px-0 text-center w-full  flex  justify-between "
        onMouseEnter={onCloseModalHandler}
      >
        <Link href="/">
          <div className="flex">
            <div className="relative w-[4rem] h-[4rem] rounded-full overflow-hidden">
              {" "}
              <Image
                quality={50}
                src={logo}
                fill
                // width={60}
                // height={60}
                loading="lazy"
                alt="logo"
              />
            </div>
            <h2 className="mt-5 mx-2"> {businessName} </h2>
          </div>
        </Link>

        <div className="flex">
          <div className="flex justify-end text-skin-color  w-full ">
            <button
              className=" border-0 mt-[-4px] ml-3"
              onClick={showSearchHandler}
            >
              <SearchNormal1 size="28" />
            </button>
            <CartBtn />

            {!isLoggedIn && (
              <button
                onClick={authHandler}
                className="bg-skin-fill  text-[white]  w-full px-3 mt-4 h-[2.5rem] rounded-md"
              >
                ثبت نام | ورود
              </button>
            )}
          </div>

          {isLoggedIn && <ProfileDrop />}
        </div>
      </nav>
    </>
  );
}

export default memo(NavBar);
