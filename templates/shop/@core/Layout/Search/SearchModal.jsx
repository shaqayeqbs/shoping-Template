import React, { useState, useEffect, memo } from "react";
import ReactDom from "react-dom";

const MyModal = ({ children, onClose }) => {
  console.log(children, onClose);
  console.log("this runs?");
  return (
    <div className="container bg-[red]">
      <div
        className="fixed bg-[#8585856b] !bg-[yellow] right-0 bottom-0 top-0 left-0 backdrop:blur-lg w-full h-screen"
        onClick={onClose}
      ></div>

      <div className="container fixed top-0 z-50  w-[50%] h-[10rem]">
        {children}
      </div>
    </div>
  );
};

function SearchModal({ open, children, selector, onClose }) {
  console.log({ open, children, selector, onClose });
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
        <MyModal onClose={onClose} children={children} />,
        document.querySelector(selector)
      )
    : null;
}

export default memo(SearchModal);
