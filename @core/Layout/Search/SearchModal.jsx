import React, { useState, useEffect, memo } from "react";
import ReactDom from "react-dom";

const MyModal = ({ children, onClose, className }) => {
  return (
    <div className="text-center">
      {!className && (
        <div
          className="fixed !z-50  bg-[#8585856b]  right-0 top-28 bottom-[0rem] left-0 backdrop:blur-lg w-full h-screen"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed z-50 bg-[whie] h-[7rem] mx-auto bg-[#f6f6f6]   top-[0rem] w-[100%] ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

function SearchModal({ open, children, selector, onClose, className = "" }) {
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
        <MyModal onClose={onClose} children={children} className={className} />,
        document.querySelector("#search")
      )
    : null;
}

export default memo(SearchModal);
