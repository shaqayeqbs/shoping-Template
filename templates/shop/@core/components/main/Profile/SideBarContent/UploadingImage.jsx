import React, { useState } from "react";
import { resizeFile } from "../../../../Helper/ImageResizer";
import { useDispatch } from "react-redux";
import { updateProfileImage } from "../../../../../../../store/Slices/UserSlice";
import { FiUpload } from "react-icons/fi";
import Compressor from "compressorjs";
import { Gallery } from "iconsax-react";
function UploadingImage() {
  const [compressedImage, setCompressedImage] = useState(null);

  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const dispatch = useDispatch();

  const handleCompressedUpload = (files) => {
    const image = files[0];
    setSelectedImage(URL.createObjectURL(image));
    new Compressor(image, {
      quality: 0.2,
      success: (compressedResult) => {
        setCompressedImage(compressedResult);
      },
    });
  };
  let data = new FormData();
  const handleUpload = async () => {
    setUploading(true);
    try {
      const image = await resizeFile(compressedImage);
      console.log(image);

      data.append("image", image);
      for (var key of data.entries()) {
        console.log(key[0] + ", " + key[1]);
      }

      const res = await dispatch(
        updateProfileImage({
          data,
        })
      );
      console.log(res, data);
    } catch (error) {
      console.log(error);
    }
    setUploading(false);
  };

  return (
    <form>
      <label>
        <input
          type="file"
          hidden
          accept="image/png, image/jpg, image/jpeg"
          onChange={(e) => handleCompressedUpload(e.target.files)}
        />
        <div className=" aspect-video border-0 rounded flex items-center justify-center  border-dashed ">
          {selectedImage ? (
            <div
              className=" flex flex-col items-center justify-center overflow-hidden text-skin-primary w-[10rem] h-[10rem] rounded-full !bg-[#F8F8F8] cursor-pointer "
              style={{ background: "#F8F8F8" }}
            >
              <img
                src={selectedImage}
                alt=""
                className="block object-cover h-full w-full"
              />
            </div>
          ) : (
            <div
              className=" flex flex-col items-center justify-center text-skin-primary w-[10rem] h-[10rem] rounded-full !bg-[#F8F8F8] cursor-pointer "
              style={{ background: "#F8F8F8" }}
            >
              <Gallery size="40" className="block  " />
              {compressedImage && <img src={compressedImage} />}
            </div>
          )}
        </div>
      </label>
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ opacity: uploading ? ".5" : "1" }}
        className="bg-red-600 border-0 p-3 mb-8 text-center mx-auto w-full rounded text-white"
      >
        {uploading ? (
          "Uploading.."
        ) : (
          <div className=" mt-3 w-max flex text-skin-primary items-center mx-auto">
            <FiUpload size={15} variant="" className="ml-3" />
            انتخاب تصویر &nbsp;
          </div>
        )}
      </button>
    </form>
  );
}

export default UploadingImage;
