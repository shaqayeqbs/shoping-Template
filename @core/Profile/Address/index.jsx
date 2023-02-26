import React, { useState, useEffect } from "react";
import UserAddress from "./UserAddress";
import AddAddressSection from "./AddAddressSection";
import { useSelector } from "react-redux";
import { Trash } from "iconsax-react";
import {
  getUserAddressApi,
  storeNewAddressToUserApi,
  removeTheUserAddressApi,
  updateTheUserAddressApi,
} from "../../api/userApi";

function Index() {
  const [addrsses, setAddress] = useState([]);
  const id = useSelector((state) => state.user?.id);
  const userName = useSelector((state) => state.user?.name);
  const userSurname = useSelector((state) => state.user?.surname);
  const phone = useSelector((state) => state.user?.mobile);

  useEffect(() => {
    async function fetchData() {
      const response = await getUserAddressApi(10);
      setAddress(response?.data?.addresses);
    }
    fetchData();
  }, []);
  const addNewAddressHandler = async (address) => {
    const data = {
      userId: id,
      name: address.name,
      zipcode: address.zipCode,
      lat: address.lat,
      address: address.address,
      lng: address.lng,
      plague: address.plague,
      unit: address.unit,
      is_primary: address.is_primary,
      ami_reciver: address.ami_reciver,
      reciver_name: address.reciver_name ? address.reciver_name : userName,
      reciver_surname: address.reciver_name
        ? address.reciver_surname
        : userSurname,
      reciver_phone: address.reciver_phone ? address.reciver_phone : phone,
    };
    const res = await storeNewAddressToUserApi(data);
    if (res?.data) {
      setAddress([...addrsses, res.data?.address]);
    }
  };
  const removeAddressHandler = async (addressId) => {
    const res = await removeTheUserAddressApi(id, addressId);
    if (res == 200) {
      const updatedArray = addrsses.filter(
        (address) => address.id != addressId
      );
      setAddress(updatedArray);
    }
  };
  const updateAddressHandler = async (item) => {
    console.log(item);
    const data = { ...item, id, addressId: item?.addressId };
    const res = await updateTheUserAddressApi(data);
    console.log(res);
    // if (res == 200) {
    //   setAddress(updatedArray);
    // }
  };
  console.log({ addrsses });
  return (
    <div>
      <UserAddress
        addresses={addrsses}
        onRemoveAddress={removeAddressHandler}
        onUpdateAddress={updateAddressHandler}
      />
      <AddAddressSection onAddAddress={addNewAddressHandler} />
    </div>
  );
}

export default Index;
