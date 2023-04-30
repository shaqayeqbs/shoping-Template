import React, { useState } from "react";
import { User, Mobile, Sms, Location, Edit, Trash } from "iconsax-react";
import Modal from "../../UI/Modal";
import AddAddressForm from "./AddAddressForm";
import { RecordCircle } from "iconsax-react";
import { setUserAddressTospecifiedOrderAPi } from "../../api/userApi";
import { useSelector } from "react-redux";

function UserAddress({ addresses, onRemoveAddress, onUpdateAddress }) {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const [primaryAddress, setPrimaryAddress] = useState(addresses[0]?.id);
  const [myItem, setItem] = useState();
  const orderId = useSelector((state) => state.cart.orderId);
  const showUpdateFormHandler = (item) => {
    setShowUpdateForm((prv) => !prv);
    if (!myItem && item?.id != myItem?.id) setItem(item);
  };

  const setUserAddressHandler = async (id) => {
    setPrimaryAddress(id);
    const res = await setUserAddressTospecifiedOrderAPi({
      id: orderId,
      user_address_id: id,
    });
  };
  return (
    <div className="mb-8 ">
      {showUpdateForm && (
        <Modal
          open={showUpdateForm}
          onClose={showUpdateFormHandler}
          selector="#portal"
        >
          <div className="lg:max-h-[500px] overflow-y-scroll">
            {" "}
            <AddAddressForm
              item={myItem}
              onAddAddress={onUpdateAddress}
              onCloseModal={showUpdateFormHandler}
            />
          </div>
        </Modal>
      )}
      {addresses?.map((item, index) => (
        <div key={index}>
          <div className="flex bg-[white] rounded-xl mb-10 relative justify-between w-full">
            <div
              className={
                primaryAddress === item.id
                  ? "bg-skin-fill border-2 border-primary text-[white]   justify-center  rounded-r-xl  w-[3rem]"
                  : "border-2   justify-center  rounded-r-xl w-[3rem]"
              }
            >
              <button
                onClick={setUserAddressHandler.bind(null, item.id)}
                className="text-center border-0 border-none"
              >
                <RecordCircle
                  size="20"
                  variant={primaryAddress === item?.id ? "Bulk" : "TwoTone"}
                  className="absolute top-[40%] right-3 mx-auto"
                />
              </button>
            </div>

            <div className="w-[80%] p-6">
              <div className="lg:flex justify-between w-full lg:mb-5">
                <div>
                  <User size="20" className="inline" />

                  <span> {item?.reciver_name}</span>
                  <span className="block my-2 lg:inline-block">
                    {" "}
                    {item?.reciver_surname}
                  </span>
                </div>
                <div>
                  <Mobile size="20" className="inline lg:mx-3 ml-3" />
                  {item?.reciver_phone}
                </div>
                <div>
                  <Sms size="20" className="inline lg:mx-3 ml-3" />
                  {item?.zip_code}
                </div>
              </div>
              <div className="w-">
                <Location size="20" className="inline lg:mx-3 ml-3" />
                {item?.address}
              </div>
            </div>

            <div>
              {" "}
              <button
                className="border-0"
                onClick={onRemoveAddress?.bind(null, item.id)}
              >
                <Trash size="20" className="inline text-[#ED5E5E] my-6 ml-3" />
              </button>
              <button
                className="border-0"
                onClick={showUpdateFormHandler.bind(null, item)}
              >
                <Edit size="20" className="inline text-skin-primary my-6 " />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserAddress;
