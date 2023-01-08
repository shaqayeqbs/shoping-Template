import React from "react";
import classes from "./Layout.module.css";
import MegaMenu from "./MegaMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import { Headerlinks } from "../data/headerLinks";

function MyLinks({ onAddClose, showMenu, openModal, mobile }) {
  const router = useRouter();

  return (
    <>
      {showMenu && (
        <MegaMenu isOpen={showMenu} onCloseModalHandler={onAddClose} />
      )}
      <ul className={!mobile ? classes.links : ""}>
        <li className={!mobile ? "" : " my-4"}>
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
            <div className={!mobile ? "" : " my-4"}>
              <Link href={item.href}>{item.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MyLinks;
