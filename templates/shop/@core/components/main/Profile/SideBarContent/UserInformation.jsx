import React from "react";
import Card from "../../../../UI/Card";
import { useSelector } from "react-redux";
import UploadingImage from "./UploadingImage";
import { Datepicker } from "@ijavad805/react-datepicker";
function UserInformation(dirs = []) {
  const { name, surname, city, birthday, gender, mobile, id_card } =
    useSelector((state) => state.user);

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
      // defaultValue: id_card,
      placeholder: id_card,
      // ref: cellphoneInputRef,
    },
    {
      name: "mobile",
      label: "موبایل",
      // defaultValue: mobile,
      type: "text",
      maxLength: 11,
      readOnly: true,
      value: mobile,
      // ref: cellphoneInputRef,
    },
  ];

  return (
    <Card>
      <div className="p-16 py-10">
        <h2>نمایه شما</h2>
        <UploadingImage />
        <form className="">
          <div className="grid grid-cols-2">
            {inputsWithUsage.map((item, index) =>
              item.type != "date" ? (
                <div key={index}>
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
                    defaultValue={!item.value ? item.defaultValue : undefined}
                    placeholder={item.placeholder}
                    readOnly={item.readOnly ? true : false}
                  />
                </div>
              ) : (
                <div key={index}>
                  <label htmlFor={item.name}>{item.label}</label>
                  <div className="input p-0 py-3 ">
                    <Datepicker
                      input={
                        <input
                          value={item.value}
                          defaultValue={
                            !item.value ? item.defaultValue : undefined
                          }
                          placeholder={item.placeholder}
                        />
                      }
                      onChange={(val) => {
                        console.log(val.format());
                      }}
                    />
                  </div>
                </div>
              )
            )}
          </div>
          <div>جنسیت</div>
          <div className="flex my-6 ">
            <div className="ml-6">
              {" "}
              <input
                type="radio"
                name="gender"
                checked={gender}
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
                checked={gender}
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
