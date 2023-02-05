import React, { useState, useEffect, memo } from "react";
import ReactDom from "react-dom";

const MyModal = ({ children, onClose }) => {
  return (
    <div className="text-center">
      <div
        className="fixed z-20  bg-[#8585856b]  right-0 bottom-0 top-0 left-0 backdrop:blur-lg w-full h-screen"
        onClick={onClose}
      ></div>

      <div className="fixed z-50 bg-[white] h-[11rem]  top-[0rem] w-[100%]">
        {children}
      </div>
    </div>
  );
};

function SearchModal({ open, children, selector, onClose }) {
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
        document.querySelector("#search")
      )
    : null;
}

export default memo(SearchModal);
