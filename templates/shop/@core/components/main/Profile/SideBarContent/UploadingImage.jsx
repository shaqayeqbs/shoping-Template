import React, { useState, useRef } from "react";

import MyDemo from "./imageProfile/CroppedImg";

function UploadingImage({ UploadingImage }) {
  return (
    <>
      <MyDemo UploadingImage={UploadingImage} />
    </>
  );
}

export default UploadingImage;
