import React, { useState, useEffect } from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const MyModal = ({ children, onClose }) => {
  return (
    <div className={classes.container}>
      <div className={classes.overlays} onMouseEnter={onClose}></div>
      <div className={classes.modal}>{children}</div>
    </div>
  );
};

function Modal({ open, children, selector, onClose }) {
  if (!open) return null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [selector]);

  return mounted
    ? ReactDom.createPortal(
        <MyModal onClose={onClose} children={children} />,
        document.querySelector(selector)
      )
    : null;
}

export default Modal;
