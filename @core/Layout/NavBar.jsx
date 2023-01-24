import { Bag2, SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import ProfileDrop from "../components/main/Profile/ProfileDrop";
import ModalVerification from "./modals/ModalVerification";

function NavBar({ onCloseModalHandler }) {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const authHandler = () => {
    setOpenAuthModal((prevState) => !prevState);
  };
  const businessName = useSelector((state) => state?.businessSlice?.name);
  const logo = useSelector((state) => state?.businessSlice?.logo);
  const isLoggedIn = useSelector((state) => state?.user.isLoggedIn);

  const myLoader = ({ src }) => {
    return logo;
  };

  return (
    <>
      {<ModalVerification isOpen={openAuthModal} onClose={authHandler} />}
      <nav
        className="container  mx-20 px-0 text-center w-full   !py-6 flex  justify-between "
        onMouseEnter={onCloseModalHandler}
      >
        <Link href="/">
          <div className="flex">
            <div className="relative w-[4rem] h-[4rem]">
              {" "}
              <img
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
          <div className="flex text-skin-color ">
            <button className=" border-0 ml-3">
              {" "}
              <SearchNormal1 size="28" />
            </button>

            <button className=" border-0 ml-3">
              <Bag2 size="28" />
            </button>

            {!isLoggedIn && (
              <button
                onClick={authHandler}
                className="bg-skin-fill text-[white] px-3 mt-3 h-[2.5rem] rounded-md"
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
