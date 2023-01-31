import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import ReactDom from "react-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import MyLinks from "./MyLinks";
import NavBar from "./NavBar";

function MainNavigation({ onCloseHandler, openModalHandler, showMenu }) {
  const [nav, setNav] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const businessName = useSelector((state) => state?.businessSlice?.name);

  const handleNav = () => {
    setNav((prev) => !prev);
  };
  const closeNav = () => {
    setNav(false);
  };
  const myLoader = ({ src }) => {
    return "http://core.behzi.net/storage/image/business/logo/1670323071.png";
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
        nav ? " w-full bg-[white] fixed z-50" : " w-full bg-[white] fixed z-50"
      }
    >
      <div className=" hidden md:block   w-full h-full px-2 mb-2 2xl:px-16">
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
      <div className=" md:hidden w-full p-4 pt-8 flex justify-between">
        {" "}
        <div onClick={handleNav} className="">
          <AiOutlineMenu size={25} />
        </div>
        <div className="text-left ">
          {" "}
          <Link href="/">
            <div className="flex justify-start">
              <div className=" float-left text-left -mt-2 ">
                {" "}
                <div className="relative">
                  {" "}
                  <Image
                    quality={50}
                    loading="lazy"
                    src="http://core.behzi.net/storage/image/business/logo/1670323071.png"
                    width={60}
                    height={60}
                    // loader={myLoader}
                    alt="logo"
                  />
                </div>
              </div>
              <h2 className="ml-4 w-full"> {businessName} </h2>
            </div>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}

      {nav && <Nav nav={nav} closeNav={closeNav} />}
    </div>
  );
}

function Nav({ nav, closeNav }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? ReactDom.createPortal(
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
            {/* <Link href="/">
              <div
                className="md:flex border-b-2 pb-4 border-primary"
                onClick={closeNav}
              >
                <Logo />

                <h2 className="m-4">باغ هیوا</h2>
              </div>
            </Link> */}
            <MyLinks mobile closeSidebar={closeNav} />
          </div>
        </div>,
        document.querySelector("#sidebar")
      )
    : null;
}

export default memo(MainNavigation);
