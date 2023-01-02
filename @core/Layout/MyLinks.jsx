import React from "react";
import classes from "./Layout.module.css";
import MegaMenu from "./MegaMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import { Headerlinks } from "../data/headerLinks";

function MyLinks({ onAddClose, showMenu, openModal }) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      {showMenu && (
        <MegaMenu isOpen={showMenu} onCloseModalHandler={onAddClose} />
      )}
      <ul className={classes.links}>
        <li>
          <div onMouseEnter={openModal}> دسته بندی</div>
        </li>

        {Headerlinks.map((item) => (
          <li
            key={item.id}
            onMouseEnter={onAddClose}
            className={
              router.pathname == item.href ? "text-skin-primary font-bold" : ""
            }
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MyLinks;
