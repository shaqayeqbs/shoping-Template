import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import MyLinks from "./MyLinks";
import NavBar from "./NavBar";

import CartBtn from "./CartBtn";
import ProfileDrop from "../Profile/ProfileDrop";
import ModalVerification from "./modals/ModalVerification";

function MainNavigation({ onCloseHandler, openModalHandler, showMenu }) {
  const [nav, setNav] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const businessName = useSelector((state) => state?.businessSlice?.name);
  const isLoggedIn = useSelector((state) => state?.user.isLoggedIn);
  const logo = useSelector((state) => state?.businessSlice?.logo);
  const authHandler = () => {
    setOpenAuthModal((prevState) => !prevState);
  };

  const handleNav = () => {
    setNav((prev) => !prev);
  };
  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    window.onscroll = function (e) {
      if (this.oldScroll > this.scrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      this.oldScroll = this.scrollY;
    };
  }, [window]);

  return (
    <div
      className={
        nav
          ? "!w-full bg-skin-background fixed z-50"
          : " w-full bg-skin-background !right-0 fixed z-50"
      }
    >
      {<ModalVerification isOpen={openAuthModal} onClose={authHandler} />}
      <div className=" hidden md:block   w-full h-full px-2 mb-2  ">
        <NavBar />
        <div className="container my-5 ">
          {" "}
          {isVisible && (
            <MyLinks
              onAddClose={onCloseHandler}
              openModal={openModalHandler}
              showMenu={showMenu}
              closeSidebar={closeNav}
            />
          )}
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="w-full px-4 container mx-auto">
        <div className=" md:hidden w-full py-3 flex gap-0 justify-between items-center border-b-2 border-primary ">
          {" "}
          {/* <div className="flex"> */}{" "}
          <div onClick={handleNav} className="ml-1 h-fit">
            <AiOutlineMenu size={25} />
          </div>
          {/* </div> */}
          {/* <div className=" float-left text-left -mt-2 "> */}{" "}
          <Link href={"/"} className="relative flex pb-0">
            {" "}
            <Image
              quality={50}
              loading="lazy"
              src={logo}
              width={60}
              height={60}
              // loader={myLoader}
              alt="logo"
              className="w-[2.5rem] h-[2.5rem] md:w-full md:h-full rounded-full ml-3"
            />
            <h2 className="ml-4 mt-2 md:mt-0 w-full"> {businessName} </h2>
          </Link>
          {/* </div> */}
          <div className="text-left ">
            {" "}
            <Link href="/">
              <div className="flex justify-start md:mt-0  text-sm md:text-xl">
                <div className="flex">
                  <div className="flex justify-end text-skin-color  w-full ">
                    {/* <button
                    className=" border-0 mt-[-4px] ml-3"
                    // onClick={showSearchHandler}
                  >
                    <SearchNormal1 size="28" />
                  </button> */}

                    {!isLoggedIn && (
                      <button
                        onClick={authHandler}
                        className="bg-skin-fill  text-[white]  w-full px-3 md:mt-4 h-[2.5rem] rounded-md"
                      >
                        ثبت نام | ورود
                      </button>
                    )}
                  </div>
                  {isLoggedIn && <CartBtn />}
                  {isLoggedIn && <ProfileDrop />}
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}

        {nav && <Nav nav={nav} closeNav={closeNav} />}
      </div>
    </div>
  );
}

function Nav({ nav, closeNav }) {
  const isLoggedIn = useSelector((state) => state?.user.isLoggedIn);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <div>
          <div
            className="fixed top-0 left-0 bottom-0 bg-[#4040406b] blur- bg-opacity-25  z-40 w-full h-screen"
            onClick={closeNav}
          ></div>
          <div
            className={
              nav
                ? " fixed right-0 top-0 w-[50%] h-screen bg-[white] !z-50 p-10 ease-in duration-1000"
                : "fixed right-[-100%] top-0 p-10 ease-in z-0 duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between"></div>
            </div>

            <MyLinks mobile closeSidebar={closeNav} />
          </div>
        </div>,
        document.querySelector("#sidebar")
      )
    : null;
}

export default memo(MainNavigation);
