import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Headerlinks } from "../data/headerLinks";
import classes from "./Layout.module.css";
import MegaMenu from "./MegaMenu";

function MyLinks({ onAddClose, showMenu, openModal, mobile, closeSidebar }) {
  const router = useRouter();

  return (
    <div className="border-t-2 border-primary">
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
            <div className={!mobile ? "" : " my-4"} onClick={closeSidebar}>
              <Link href={item.href}>{item.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyLinks;
