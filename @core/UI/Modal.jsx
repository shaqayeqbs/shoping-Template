import React, { useState, useEffect, memo } from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const MyModal = ({ children, onClose, MegaMenu }) => {
  const overlayClass = MegaMenu ? classes.megaOverLay : classes.overlays;
  const modalClass = MegaMenu ? classes.megaModal : classes.modal;

  return (
    <div className="container ">
      <div
        className={overlayClass}
        onClick={onClose}
        onMouseEnter={MegaMenu ? onClose : () => console.log("")}
      ></div>

      <div className={`${modalClass} container`}>{children}</div>
    </div>
  );
};

function Modal({ open, children, selector, onClose, MegaMenu }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [selector]);

  if (!open) {
    return null;
  }

  return mounted
    ? ReactDom.createPortal(
        <MyModal onClose={onClose} children={children} MegaMenu={MegaMenu} />,
        document.querySelector(selector)
      )
    : null;
}

export default memo(Modal);
