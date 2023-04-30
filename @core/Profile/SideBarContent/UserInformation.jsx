import React, { useRef, useState } from "react";
import Card from "../../../../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import UploadingImage from "./UploadingImage";
import PersianDatePicker from "../../../../../../../@core/Helper/DatePicker";
import { updateProfile } from "../../../../../../../store/Slices/UserSlice";
import { getListOfCitys } from "../../../../../../../@core/api/location";
import { emptyInput } from "../../../../constants/toasts-messages";
import moment from "jalali-moment";
function UserInformation() {
  const { name, surname, city, birthday, gender, mobile, id_card, image } =
    useSelector((state) => state.user);

  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const genderInputRef = useRef();
  const cityInputRef = useRef();
  const [birthdayDate, setBirthdayDate] = useState(birthday?.slice(0, 10));
  const [cities, setCities] = useState([]);
  // const [userCity, setUserCity] = useState(city.name);
  const [cityId, setCityId] = useState(city?.id);

  const inputsWithUsage = [
    {
      name: "name",
      label: "نام",
      type: "text",
      maxLength: 11,
      placeholder: "نام",
      defaultValue: name,
      ref: nameInputRef,
    },
    {
      name: "lastname",
      label: "نام خانوادگی",
      type: "text",
      maxLength: 16,
      defaultValue: surname,

      placeholder: "نام خانوادگی",
      ref: lastNameInputRef,
    },
    {
      name: "city",
      label: "شهر",
      type: "text",
      maxLength: 15,
      placeholder: "شهر",
      defaultValue: city.name,
      ref: cityInputRef,
    },
    {
      name: "birth",
      label: "تاریخ تولد",
      type: "date",
      defaultValue: birthdayDate,
      placeholder: "تاریخ تولد",
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
      // ref: cityInputRef,
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

  const changeBirthdayDate = (data) => {
 
    if (data != "" && birthdayDate != data) {
      const date = moment
        .from("1367/11/04", "fa", "YYYY/MM/DD")
        .format("YYYY/MM/DD");
  
      setBirthdayDate(data);
    }
  };

  const onChangeCityHandler = async (e) => {
    e.preventDefault();

    const cName = e.target.value;
    if (cName.length >= 2) {
      const cities = await getListOfCitys(cName);

      setCities(cities);
    } else {
      setCities([]);
    }
    if (e.target.value === "") {
      setCities([]);
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredGender = genderInputRef.current.value;
    const formatetBirthday = birthdayDate?.replace(/\//g, "-");

    if (enteredName.length < 2 || enteredLastName < 2) {
      emptyInput();
      return;
    }

    const data = {
      birthday: formatetBirthday,
      city_id: cityId,
      gender: +enteredGender,
      name: enteredName,
      surname: enteredLastName,
    };

    dispatch(updateProfile(data));
  };

  return (
    <Card>
      <h2>نمایه شما</h2>
      <UploadingImage UploadingImage={image} />
      <div className="p-16 py-10">
        <form className="">
          <div className="relative grid grid-cols-2">
            {inputsWithUsage?.map((item, index) =>
              item.type != "date" ? (
                <div key={index} className="">
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
                    // onFocus={onFocus}
                    value={item?.value}
                    defaultValue={!item.value ? item.defaultValue : undefined}
                    placeholder={item.placeholder}
                    readOnly={item.readOnly ? true : false}
                    ref={item.ref ? item.ref : null}
                    onChange={
                      item.name === "city"
                        ? onChangeCityHandler
                        : (e) => {
                            e.preventDefault();
                          }
                    }
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  />
                  <div className="absolute w-[50%] ">
                    {item.name === "city" && cities.length > 0 && (
                      <ul className="bg-[white] border-2 w-[90%] border-bordercolor height h-[200px]  rounded-lg p-2 max-h-[200px] overflow-y-scroll">
                        {cities?.map((item) => (
                          <li
                            key={item.id}
                            className="min-h-10 w-full border-b-[1px]  border-solid border-l-[gray] py-2"
                          >
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();

                                cityInputRef.current?.value = item.name;
                                setCityId(item.id);

                                setCities([]);
                              }}
                              className="border-0 hover:text-skin-primary"
                            >
                              {" "}
                              {item.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ) : (
                <div key={index}>
                  <label htmlFor={item.name}>{item.label}</label>
                  <div className="input p-0 py-3 ">
                    <PersianDatePicker
                      onAddDate={changeBirthdayDate}
                      defaultDate={item.defaultValue}
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
                defaultChecked={gender}
                ref={genderInputRef}
                value="0"
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
                defaultChecked={gender}
                ref={genderInputRef}
                name="gender"
                value="1"
                className="accent-second "
                style={{ accentColor: "green" }}
              />
              <label htmlFor="male" className="mr-3  ">
                زن
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={submitFormHandler}
              className="px-6 py-2 rounded-lg bg-skin-fill text-[white]"
            >
              تایید
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default UserInformation;
