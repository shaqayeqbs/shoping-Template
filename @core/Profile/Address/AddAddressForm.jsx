import React, { useState, useEffect, useRef } from "react";
// import Map from "../../../templates/shop/@core/utils/Map/Map";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

// import Map from "../../utils/Map/Map";
import { emptyInput } from "../../constants/toasts-messages";
const Map = dynamic(() => import("../../utils/Map/Map"), {
  ssr: false,
});

function AddAddressForm({ onAddAddress, onCloseModal, item }) {
  const [lat, setLat] = useState(item ? item.lat : 37.27644303848);
  const [userReciver, setUserReciver] = useState(
    item ? item.ami_reciver : true
  );
  const [isPrymaryAddress, setIsPrimaryAddress] = useState(
    item ? item.is_primary : true
  );
  const [lng, setLng] = useState(item ? item.lng : 49.57137831479);

  const [cordinates, setCordinates] = useState([lat, lng]);
  // const address = useSelector((state) => state.businessSlice?.addresses);
  const [reciverName, setReciverName] = useState();
  const [reciverSurName, setReciverSurName] = useState();
  const [phone, setPhone] = useState();

  const [addressTitle, setAddressTitle] = useState(item ? item.name : null);
  const [zip, setZip] = useState(item ? item.zip_code : null);
  const [unit, setUnit] = useState(item ? item.unit : null);
  const [plaque, setPlaque] = useState(item ? item.plague : null);
  const [address, setAddress] = useState(item ? item.address : null);

  // useEffect(() => {
  //   if (address[0]?.address) {
  //     setLat(+address[0]?.address?.lat);
  //     setLng(+address[0]?.address?.lng);
  //   }
  //   setDefaultCenter([lat, lng]);
  // }, [address, lat, lng]);

  // useEffect(() => {
  //   if (city) {
  //     setCordinates([city.latitude, city.longitude]);
  //   }
  // }, [city]);

  const formInputs = [
    {
      id: 1,
      name: "address-name",
      label: "عنوان آدرس",
      type: "text",
      maxLength: 20,
      value: item ? item.name : addressTitle,

      onChange: (val) => {
        setAddressTitle(val?.target?.value);
      },
    },
    {
      id: 2,
      name: "zip_code",
      label: "کد پستی",
      type: "text",
      maxLength: 15,
      value: item ? item.zip_code : zip,
      onChange: (val) => {
        setZip(val.target?.value);
      },
    },
    {
      id: 3,
      name: "unit",
      label: "واحد",
      type: "text",
      maxLength: 20,
      value: item ? item.unit : unit,
      onChange: (val) => {
        setUnit(val?.target?.value);
      },
    },
    {
      id: 10,
      name: "plaque",
      label: "پلاک",
      type: "number",
      maxLength: 11,
      placeholder: "نام",
      value: item ? item.plague : plaque,
      onChange: (val) => {
        setPlaque(val?.target?.value);
      },
    },
  ];
  const reciverForm = [
    {
      id: 4,
      name: "name",
      label: "نام ",
      type: "text",
      maxLength: 25,
      value: item ? item.reciver_name : reciverName,
      onChange: (val) => {
        setReciverName(val.target.value);
      },
    },
    {
      id: 5,
      name: "surname",
      label: "  نام خانوادگی ",
      type: "text",
      maxLength: 25,
      value: item ? item.reciver_surname : reciverSurName,
      onChange: (val) => {
        setReciverSurName(val.target.value);
      },
    },
    {
      id: 6,
      name: "phone",
      label: "شماره تلفن",
      type: "text",
      maxLength: 20,
      value: item ? item.reciver_phone : phone,
      onChange: (val) => {
        setPhone(val.target.value);
      },
    },
  ];
  const onAddAddressHandler = (e) => {
    e.preventDefault();

    if (!addressTitle || !zip || !plaque || !unit) {
      return emptyInput();
    }

    const data = {
      addressId: item ? item.id : null,
      name: addressTitle,
      zipCode: zip,
      address: address,
      lat: cordinates[0],
      lng: cordinates[1],

      is_primary: isPrymaryAddress,
      plague: plaque,
      unit: unit,
      ami_reciver: userReciver,
      reciver_name: reciverName,
      reciver_surname: reciverSurName,
      reciver_phone: phone,
    };

    onAddAddress(data);
    // onCloseModal();
  };

  return (
    <form className="p-6 ">
      <h2 className="text-center text-[24px] mt-4">آدرس گیرنده سفارش</h2>

      <div className="grid grid-cols-2 pt-8 gap-[1rem]">
        {formInputs.map((item) => (
          <div className="" key={item.id}>
            <label htmlFor={item.name} className="my-2 block">
              {item.label}
            </label>
            <input
              type="text"
              required
              name={item.name}
              defaultValue={item.value}
              onChange={item.onChange}
              className="border-2 border-bordercolor w-full block rounded-md p-2 m-0"
            />
          </div>
        ))}
      </div>
      <label htmlFor="fname" className="my-2 block">
        متن آدرس
      </label>
      <textarea
        id="w3review"
        name="w3review"
        rows="4"
        cols="50"
        required={true}
        defaultValue={item ? item.address : address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        className="border-2 border-bordercolor w-full block rounded-md p-2 m-0"
      ></textarea>
      <div className="mt-4 z-0">
        <div className="w-full h-[400px]">
          <p className="my-4"> انتخاب محل در نقشه</p>

          <Map
            value={cordinates}
            change={setCordinates}
            className="w-full h-[200px]"
          />
        </div>
        <div className="flex mb-5">
          <button
            onClick={() => {
              setIsPrimaryAddress((prev) => !prev);
            }}
            type="button"
            className="border-2 pt-0 text-skin-primary w-[1.5rem] h-[1.5rem] ml-3 rounded-md"
          >
            {isPrymaryAddress ? "✔" : ""}
          </button>
          <h3> آدرس پیش فرض</h3>
        </div>

        <div className="flex">
          <button
            onClick={() => {
              setUserReciver((prev) => !prev);
            }}
            type="button"
            className="border-2 pt-0 text-skin-primary w-[1.5rem] h-[1.5rem] ml-3 rounded-md"
          >
            {userReciver ? "✔" : ""}
          </button>
          <h3>خودم گیرنده هستم</h3>
        </div>

        {!userReciver && (
          <div className="grid grid-cols-2 pt-8 gap-[1rem]">
            {reciverForm.map((item, index) => (
              <div className="" key={index}>
                <label htmlFor={item.name} className="my-2 block">
                  {item.label}
                </label>
                <input
                  type="text"
                  name={item.name}
                  defaultValue={item.value}
                  onChange={item.onChange}
                  className="border-2 border-bordercolor w-full block rounded-md p-2 m-0"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={onAddAddressHandler}
        className="block mx-auto mt-9 text-[white] bg-skin-fill px-10 py-2"
      >
        تایید
      </button>
    </form>
  );
}

export default AddAddressForm;
