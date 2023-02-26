import React, { useState } from "react";
import Card from "../../../templates/shop/@core/UI/Card";
import { User, Mobile, Sms, Location, Edit, Trash } from "iconsax-react";
import Modal from "../../UI/Modal";
import AddAddressForm from "./AddAddressForm";

function UserAddress({ addresses, onRemoveAddress, onUpdateAddress }) {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [myItem, setItem] = useState();

  const showUpdateFormHandler = (item) => {
    setShowUpdateForm((prv) => !prv);
    if (!myItem && item?.id != myItem?.id) setItem(item);
  };

  return (
    <div>
      {showUpdateForm && (
        <Modal
          open={showUpdateForm}
          onClose={showUpdateFormHandler}
          selector="#portal"
        >
          <div className="max-h-[500px] overflow-y-scroll">
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
        <Card key={index}>
          <div className="flex justify-between w-full">
            <div className="w-[80%]">
              <div className="flex justify-between w-full mb-5">
                <div>
                  <User size="20" className="inline" />

                  <span> {item?.reciver_name}</span>
                  <span> {item?.reciver_surname}</span>
                </div>
                <div>
                  <Mobile size="20" className="inline mx-3" />
                  {item?.reciver_phone}
                </div>
                <div>
                  <Sms size="20" className="inline mx-3" />
                  {item?.zip_code}
                </div>
              </div>
              <div>
                <Location size="20" className="inline ml-3" />
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
        </Card>
      ))}
    </div>
  );
}

export default UserAddress;
