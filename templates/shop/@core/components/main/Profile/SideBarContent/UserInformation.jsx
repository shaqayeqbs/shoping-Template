import React, { useState } from "react";
import Card from "../../../../UI/Card";
import { Gallery } from "iconsax-react";
import { useSelector } from "react-redux";

import { FiUpload } from "react-icons/fi";
function UserInformation(dirs = []) {
  const { name, surname, city, birthday, gender, mobile, id_card } =
    useSelector((state) => state.user);

  const [compressedImage, setCompressedImage] = useState(null);

  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleCompressedUpload = (files) => {
    const image = files[0];
    new Compressor(image, {
      quality: 0.8,
      success: (compressedResult) => {
        setCompressedImage(compressedResult);
      },
    });
  };
  const inputsWithUsage = [
    {
      name: "name",
      label: "نام",
      type: "text",
      maxLength: 11,
      placeholder: "نام",
      defaultValue: name,
      // ref: cellphoneInputRef,
    },
    {
      name: "lastname",
      label: "نام خانوادگی",
      type: "text",
      maxLength: 16,
      defaultValue: surname,

      placeholder: "نام خانوادگی",
      // ref: cellphoneInputRef,
    },
    {
      name: "city",
      label: "شهر",
      type: "text",
      maxLength: 15,
      placeholder: "شهر",
      defaultValue: city,
      // ref: cellphoneInputRef,
    },
    {
      name: "birth",
      label: "تاریخ تولد",
      type: "date",
      defaultValue: birthday,
      placeholder: "تاریخ تولد",
      // ref: cellphoneInputRef,
    },
    {
      name: "id",
      label: "شناسه",
      type: "text",
      maxLength: 11,
      readOnly: true,
      readOnly: true,
      defaultValue: id_card,
      placeholder: id_card,
      // ref: cellphoneInputRef,
    },
    {
      name: "mobile",
      label: "موبایل",
      defaultValue: mobile,
      type: "text",
      maxLength: 11,
      readOnly: true,
      value: mobile,
      // ref: cellphoneInputRef,
    },
  ];
  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  console.log(inputsWithUsage);
  return (
    <Card>
      <div className="p-16 py-10">
        <h2>نمایه شما</h2>
        <form className="">
          <label>
            <input
              type="file"
              hidden
              onChange={({ target }) => {
                if (target.files) {
                  const file = target.files[0];
                  setSelectedImage(URL.createObjectURL(file));
                  setSelectedFile(file);
                }
              }}
            />
            <div className=" aspect-video border-0 rounded flex items-center justify-center  border-dashed ">
              {selectedImage ? (
                <div
                  class=" flex flex-col items-center justify-center overflow-hidden text-skin-primary w-[10rem] h-[10rem] rounded-full !bg-[#F8F8F8] cursor-pointer "
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
                  class=" flex flex-col items-center justify-center text-skin-primary w-[10rem] h-[10rem] rounded-full !bg-[#F8F8F8] cursor-pointer "
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
          <div className="grid grid-cols-2">
            {" "}
            {inputsWithUsage.map((item, index) => (
              <div>
                <label htmlFor={item.name}>{item.label}</label>
                <input
                  type={item.type}
                  className={
                    item.readOnly
                      ? "input bg-skin-secondary border-0 "
                      : "input "
                  }
                  name={item.name}
                  id={item.name}
                  value={item.value}
                  defaultValue={item.defaultValue}
                  placeholder={item.placeholder}
                  readOnly={item.readOnly ? true : false}
                />
              </div>
            ))}
          </div>
          <div>جنسیت</div>
          <div className="flex my-6 ">
            <div className="ml-6">
              {" "}
              <input
                type="radio"
                name="gender"
                defaultValue={gender}
                value="male"
                style={{ accentColor: "green" }}
                className="second"
              />
              <label htmlFor="male" className="mr-3 !accent-pink-500">
                مرد
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue={gender}
                name="gender"
                value="female"
                className="accent-second "
                style={{ accentColor: "green" }}
              />
              <label htmlFor="male" className="mr-3  ">
                زن
              </label>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default UserInformation;
