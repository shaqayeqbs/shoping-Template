import { HambergerMenu } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../icons/Logo";
import ReactDom from "react-dom";
import NavBar from "./NavBar";
import MyLinks from "./MyLinks";

const MobileSideBarItem = React.lazy(() => import("./MobileSideBarItem"));

function MainNavigation({ onCloseHandler, openModalHandler, showMenu }) {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const authHandler = () => {
    setOpenAuthModal((prevState) => !prevState);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? " w-full h-full shadow-xl z-[100] ease-in-out duration-300"
          : " w-full h-full z-[100]"
      }
    >
      <div className=" hidden md:block   w-full h-full px-2 mb-2 2xl:px-16">
        <NavBar />
        <div className="container my-5 bg-red">
          {" "}
          <MyLinks
            onAddClose={onCloseHandler}
            openModal={openModalHandler}
            showMenu={showMenu}
          />
        </div>
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleNav} className="md:hidden w-full p-5 pt-10">
        <AiOutlineMenu size={25} />
      </div>
      {/* Mobile Menu */}

      {nav && <Nav selector="#sidebar" nav={nav} handleNav={handleNav} />}
    </div>
  );
}

function Nav({ nav, selector, handleNav }) {
  const [mounted, setMounted] = useState(false);

  console.log(nav);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [selector]);

  return mounted
    ? ReactDom.createPortal(
        <div>
          <div
            className="fixed top-0 right-0 bottom-0 bg-[#4040406b] blur- bg-opacity-25  z-40 w-full h-screen"
            onClick={handleNav}
          ></div>
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[50%] h-screen bg-[white] z-50 p-10 ease-in duration-1000"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between"></div>
            </div>
            <Link href="/">
              <div className="flex border-b-2 pb-4 border-primary">
                <Logo />

                <h2 className="m-4">باغ هیوا</h2>
              </div>
            </Link>
            <MyLinks mobile />
          </div>
        </div>,
        document.querySelector(selector)
      )
    : null;
}

export default MainNavigation;
