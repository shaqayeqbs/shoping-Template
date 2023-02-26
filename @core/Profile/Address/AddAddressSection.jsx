import React, { useState } from "react";
import { Add } from "iconsax-react";
import Modal from "../../UI/Modal";

import AddAddressForm from "./AddAddressForm";

function AddAddressSection({ onAddAddress }) {
  const [showAddForm, setShowAddForm] = useState(false);

  const showAddFormHandler = () => {
    setShowAddForm((prv) => !prv);
  };

  return (
    <>
      {showAddForm && (
        <Modal
          open={showAddForm}
          onClose={showAddFormHandler}
          selector="#portal"
        >
          <div className="max-h-[500px] overflow-y-scroll">
            {" "}
            <AddAddressForm
              onAddAddress={onAddAddress}
              onCloseModal={showAddFormHandler}
            />
          </div>
        </Modal>
      )}
      <button
        onClick={showAddFormHandler}
        className="text-skin-primary border-dashed w-full text-right border-[1px] p-3  rounded-lg mb-6"
      >
        <span>
          <Add size="32" className="inline-block ml-2" />
        </span>
        <span>افزودن آدرس</span>
      </button>
    </>
  );
}

export default AddAddressSection;
