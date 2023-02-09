import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import ImgDialog from "./ImgDialog";
import { getCroppedImg } from "./canvasUtils";
import { Gallery } from "iconsax-react";
import Modal from "../../../../../../../../@core/UI/Modal";
import { CloseCircle } from "iconsax-react";
import { resizeFile } from "../../../../../Helper/ImageResizer";
import { updateProfileImage } from "../../../../../../../../store/Slices/UserSlice";
import { useDispatch } from "react-redux";

const MyDemo = () => {
  const [imageSrc, setImageSrc] = React.useState(null);
  const [crop, setCrop] = useState({ x: 5, y: 5 });
  const [isOpen, setIsOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const dispatch = useDispatch();

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    setIsOpen(false);
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      console.log(typeof croppedImage);
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const onFileChange = async (e) => {
    setCroppedImage(null);
    setIsOpen(true);
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };
  const onToggleModalHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const handleUpload = async () => {
    setUploading(true);

    // try {
    if (croppedImage) {
      //   const image = await resizeFile(croppedImage);
      //   console.log(image);

      dispatch(updateProfileImage(croppedImage));
      // } catch (error) {
      //   console.log(error);
      // }
      setUploading(false);
    }
  };

  return (
    <div className="relative h-min">
      <Modal open={isOpen} onClose={onToggleModalHandler} selector="#portal">
        <button
          onClick={onToggleModalHandler}
          className=" left-4 top-4 border-none text-[gray]"
        >
          <CloseCircle />
        </button>
        <div className=" text-center mx-auto w-[80%]">
          {" "}
          {imageSrc && !croppedImage && (
            <React.Fragment>
              <div className=" relative  overflow-hidden object-cover mx-auto ">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={1 / 1}
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
                <div style={{ height: "20rem" }}></div>
              </div>
              <div className=" my-10">
                <button onClick={showCroppedImage} className="bg-[blue]">
                  ok
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </Modal>
      {imageSrc ? (
        <React.Fragment>
          {croppedImage && (
            <div>
              <form>
                <label className="flex justify-center ">
                  <input
                    type="file"
                    hidden
                    accept="image/png, image/jpg, image/jpeg"
                    onChange={onFileChange}
                  />
                  <ImgDialog img={croppedImage} onClose={onClose} />
                </label>
              </form>
              <div className="text-center">
                {" "}
                <button
                  className="text-center mx-auto my-4 border-0 text-skin-primary"
                  onClick={handleUpload}
                >
                  انتخاب تصویر
                </button>
              </div>
            </div>
          )}
        </React.Fragment>
      ) : (
        <form className="mt-10 flex justify-center">
          <label>
            <input
              type="file"
              hidden
              accept="image/png, image/jpg, image/jpeg"
              onChange={onFileChange}
            />
            <div
              className=" flex f items-center  justify-center text-skin-primary w-[10rem] h-[10rem] rounded-full  cursor-pointer "
              style={{ background: "#F8F8F8" }}
            >
              <Gallery size="40" className="block  " />
            </div>
          </label>
        </form>
      )}
    </div>
  );
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default MyDemo;
