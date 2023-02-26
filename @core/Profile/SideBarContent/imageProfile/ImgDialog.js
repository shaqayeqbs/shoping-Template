import React from "react";

const ImgDialog = (props, { onFileChange }) => {
  return (
    <div className=" w-[10rem] h-[10rem]   cursor-pointer ">
      {/* <div color="inherit" onClick={props.onClose} aria-label="Close">
          close
        </div> */}
      <input
        type="file"
        hidden
        accept="image/png, image/jpg, image/jpeg"
        onChange={onFileChange}
      />

      <img
        src={props.img}
        alt="Cropped"
        className="block rounded-full mx-auto"
      />
    </div>
  );
};

export default ImgDialog;
