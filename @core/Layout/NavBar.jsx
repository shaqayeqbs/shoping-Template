import { Bag2, SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import ProfileDrop from "../components/main/Profile/ProfileDrop";
import ModalVerification from "./modals/ModalVerification";
import Cart from "../components/main/Cart/Cart";
import CartBtn from "./CartBtn";

function NavBar({ onCloseModalHandler }) {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);
  const authHandler = () => {
    setOpenAuthModal((prevState) => !prevState);
  };
  const showCartHandler = () => {
    setCartIsShown((prev) => !prev);
  };
  const businessName = useSelector((state) => state?.businessSlice?.name);
  const logo = useSelector((state) => state?.businessSlice?.logo);
  const isLoggedIn = useSelector((state) => state?.user.isLoggedIn);

  return (
    <>
      {<ModalVerification isOpen={openAuthModal} onClose={authHandler} />}
      <nav
        className="container  mx-20 px-0 text-center w-full  flex  justify-between "
        onMouseEnter={onCloseModalHandler}
      >
        <Link href="/">
          <div className="flex  py-[.6rem]">
            <div className="relative w-[4rem] h-[4rem]">
              {" "}
              <Image
                quality={50}
                src="http://core.behzi.net/storage/image/business/logo/1670323071.png"
                // src="/images/plant.png"
                width={60}
                height={60}
                loading="lazy"
                // loader={myLoader}
                alt="logo"
              />
            </div>
            <h2 className="mt-5 mx-2"> {businessName} </h2>
          </div>
        </Link>
        <div className="flex">
          {" "}
          <div className="flex text-skin-color  w-full ">
            <button className=" border-0 ml-3">
              {" "}
              <SearchNormal1 size="28" />
            </button>

            <CartBtn onShow={showCartHandler} />
            {!isLoggedIn && (
              <button
                onClick={authHandler}
                className="bg-skin-fill  text-[white] w-full px-3 mt-7 h-[2.5rem] rounded-md"
              >
                {" "}
                ثبت نام | ورود
              </button>
            )}
          </div>
          {isLoggedIn && (
            <div className="">
              <ProfileDrop />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default memo(NavBar);
