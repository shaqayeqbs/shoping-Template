import React, { useState } from "react";

import Modal from "../../UI/Modal";
import VerifyPhoneModal from "./VerifyPhoneModal";
import VerifyCodeModal from "./VerifyCodeModal";
import { CloseCircle } from "iconsax-react";

function ModalVerification({ isOpen, onClose }) {
  const [isOpenModal, setIsOpen] = useState(false);
  const [verifyPhone, setVerifyPhone] = useState(true);
  const [verifyCode, setVerifyCode] = useState(null);

  const mobileVerifiedHandler = (phone) => {
    setVerifyCode(phone);
    setVerifyPhone(false);
  };
  const codeVerifiedHandler = () => {
    setIsOpen(false);
    setVerifyPhone(true);
    setVerifyCode(null);
    onClose();
  };
  const onCloseModalHandler = () => {
    setIsOpen(false);
    setVerifyPhone(true);
    setVerifyCode(null);
    onClose();
  };

  const returnToVerifyModalHandler = () => {
    setVerifyPhone(true);
    setVerifyCode(null);
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
        {verifyPhone && (
          <VerifyPhoneModal onMobileVerified={mobileVerifiedHandler} />
        )}

        {verifyCode && (
          <VerifyCodeModal
            returnToVerifyModal={returnToVerifyModalHandler}
            phone={verifyCode}
            onCodeVerified={codeVerifiedHandler}
          />
        )}
      </Modal>
    </div>
  );
}

export default ModalVerification;
