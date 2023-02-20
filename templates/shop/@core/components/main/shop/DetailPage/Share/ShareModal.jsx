import React, { useState } from "react";
import Modal from "../../../../../UI/Modal";
import { CloseCircle } from "iconsax-react";
function ShareModal() {
  const [isOpenModal, setIsOpen] = useState(false);

  const onCloseModalHandler = () => {
    setIsOpen(false);
    setVerifyPhone(true);
    setVerifyCode(null);
    onClose();
  };

  return (
    <div className="relative ">
      <Modal open={isOpen} onClose={onCloseModalHandler} selector="#portal">
        <button
          onClick={onCloseModalHandler}
          className="absolute left-4 top-4 border-none text-[gray]"
        >
          <CloseCircle />
        </button>
        hiiiiiiiiiiiii
      </Modal>
    </div>
  );
}

export default ShareModal;
